import React, { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Award,
  Car,
  ClipboardList,
  FileText,
  Gift,
  ListChecks,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Star,
  User,
  X,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getAllServices } from '@/data/servicesData';

/* =========================================================
   CONFIG
========================================================= */

export const CONTACT_POPUP_ENABLED = true;

const SESSION_KEY = 'contactPopupClosed';
const WHATSAPP_URL = 'https://wa.me/918888899936';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  phone: z
    .string()
    .min(10, 'Please enter a valid WhatsApp number.')
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid WhatsApp number.'),
  email: z.string().email('Please enter a valid email address.'),
  service: z.string().min(1, 'Please select a service.'),
});

type FormData = z.infer<typeof schema>;

/* =========================================================
   DATA
========================================================= */

const fields = [
  {
    name: 'name',
    placeholder: 'Your Name',
    icon: User,
    type: 'text',
    autoComplete: 'name',
  },
  {
    name: 'phone',
    placeholder: 'WhatsApp Number',
    icon: MessageCircle,
    type: 'tel',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    placeholder: 'Email Address',
    icon: Mail,
    type: 'email',
    autoComplete: 'email',
  },
] as const;

const features = [
  [ClipboardList, 'Complete', 'Service Catalogue'],
  [Sparkles, 'Before & After', 'Results'],
  [Gift, 'Exclusive Offers', '& Packages'],
  [Award, 'Expert Care', 'You Can Trust'],
] as const;

const stats = [
  [Car, '15,000+', 'Cars Detailed'],
  [Star, '4.8 ★', 'Customer Rating'],
  [FileText, 'INSTANT', 'PDF Download'],
] as const;

/* =========================================================
   SHARED STYLES
========================================================= */

const inputClass =
  'h-[42px] rounded-lg border-white/35 bg-black/75 pl-11 text-[13px] font-medium text-white shadow-none placeholder:text-white/60 focus-visible:border-[#f6bf3f] focus-visible:ring-1 focus-visible:ring-[#f6bf3f]/50';

const iconClass =
  'pointer-events-none absolute left-3.5 top-1/2 z-10 h-[18px] w-[18px] -translate-y-1/2 text-white/75';

const errorClass =
  'pl-1 text-[10px] font-medium leading-none text-red-400';

/* =========================================================
   CONTEXT
========================================================= */

type ContactContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactContext = createContext<ContactContextType | null>(null);

export const useContactForm = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error(
      'useContactForm must be used within ContactFormProvider'
    );
  }

  return context;
};

/* =========================================================
   PROVIDER
========================================================= */

export const ContactFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      !CONTACT_POPUP_ENABLED ||
      sessionStorage.getItem(SESSION_KEY)
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ContactContext.Provider value={{ open, setOpen }}>
      {children}

      {CONTACT_POPUP_ENABLED && <ContactFormDialog />}
    </ContactContext.Provider>
  );
};

/* =========================================================
   TRIGGER
========================================================= */

export const ContactFormTrigger = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { setOpen } = useContactForm();

  const openContact = () => {
    onClick?.();

    if (CONTACT_POPUP_ENABLED) {
      setOpen(true);
      return;
    }

    window.open(
      WHATSAPP_URL,
      '_blank',
      'noopener,noreferrer'
    );
  };

  if (React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      onClick?: (event: React.MouseEvent) => void;
    }>;

    return React.cloneElement(child, {
      onClick: (event) => {
        child.props.onClick?.(event);
        openContact();
      },
    });
  }

  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      onClick={openContact}
      onKeyDown={(event) => {
        if (
          event.key === 'Enter' ||
          event.key === ' '
        ) {
          event.preventDefault();
          openContact();
        }
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   FEATURE
========================================================= */

const Feature = ({
  icon: Icon,
  title,
  text,
  last,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  last: boolean;
}) => (
  <div
    className={`
      flex flex-col items-center justify-center
      px-2 text-center
      ${last ? '' : 'border-r border-white/25'}
    `}
  >
    <Icon
      strokeWidth={2}
      className="mb-1.5 h-[22px] w-[22px] text-[#f6bf3f]"
    />

    <strong className="text-[9px] font-bold uppercase leading-[11px] text-white">
      {title}
    </strong>

    <span className="mt-0.5 text-[8px] font-medium uppercase leading-[10px] text-white/75">
      {text}
    </span>
  </div>
);

/* =========================================================
   DIALOG
========================================================= */

const ContactFormDialog = () => {
  const { open, setOpen } = useContactForm();

  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const services = getAllServices();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
    },
  });

  /* Close */

  const close = () => {
    setOpen(false);
    form.reset();

    sessionStorage.setItem(
      SESSION_KEY,
      'true'
    );
  };

  /* Submit */

  const submit = async (values: FormData) => {
    setLoading(true);

    try {
      const url = import.meta.env.DEV
        ? 'http://localhost:3001/api/send-brochure'
        : '/api/send-brochure';

      const response = await fetch(url, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(
          `Request failed: ${response.status}`
        );
      }

      toast({
        title: 'Brochure sent!',
        description:
          'Check your email for the HydroWash service brochure.',
      });

      close();
    } catch (error) {
      console.error(
        'Brochure request failed:',
        error
      );

      toast({
        title: 'Unable to send brochure',
        description:
          'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) =>
        nextOpen ? setOpen(true) : close()
      }
    >
      <DialogContent
        className="
          w-[calc(100%-1rem)]
          max-w-[520px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/25
          bg-[#050505]
          p-0
          text-white
          shadow-[0_25px_100px_rgba(0,0,0,.95)]
          [&>button]:hidden
        "
      >
        <div className="relative isolate overflow-hidden">

          {/* =================================================
              BACKGROUND
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute inset-0 -z-20
              bg-cover bg-center
              opacity-[0.12]
            "
            style={{
              backgroundImage:
                "url('/Hero.webp')",
            }}
          />

          <div
            className="
              pointer-events-none
              absolute inset-0 -z-10
              bg-gradient-to-b
              from-black/70
              via-black/95
              to-black
            "
          />

          {/* Gold glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-[-50px]
              -z-10
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#f6bf3f]/10
              blur-[90px]
            "
          />

          {/* =================================================
              CLOSE
          ================================================= */}

          <button
            type="button"
            onClick={close}
            aria-label="Close brochure form"
            className="
              absolute
              right-4
              top-4
              z-50
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/50
              bg-black/70
              text-[#f6bf3f]
              backdrop-blur-md
              transition-all
              duration-200
              hover:border-[#f6bf3f]
              hover:bg-[#f6bf3f]
              hover:text-black
            "
          >
            <X
              strokeWidth={2.5}
              className="h-5 w-5"
            />
          </button>

          {/* =================================================
              HERO
          ================================================= */}

          <div className="relative h-[180px] overflow-hidden px-7 pt-6">

            {/* Logo */}

            <div className="relative z-20 inline-block">
              <div className="text-xl font-black tracking-tight text-white">
                HYDRO
                <span className="text-[#f6bf3f]">
                  WASH
                </span>
              </div>

              <div className="mt-1 h-[2px] w-full bg-[#f6bf3f]" />
            </div>

            {/* Car */}

            {/* <img
              src="/Hero.webp"
              alt="HydroWash premium detailed vehicle"
              className="
                absolute
                bottom-[-12px]
                right-[-20px]
                h-[175px]
                w-auto
                max-w-[60%]
                object-contain
                object-right-bottom
                drop-shadow-[0_20px_25px_rgba(0,0,0,.9)]
              "
            /> */}

            {/* Headline */}

            <DialogTitle
              className="
                relative
                z-10
                mt-6
                text-[29px]
                font-black
                uppercase
                leading-[0.98]
                tracking-[-0.025em]
                text-white
              "
            >
              Get Our
              <br />

              Premium Service
              <br />

              <span className="text-[#f6bf3f]">
                Brochure
              </span>
            </DialogTitle>

          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="px-7 pb-5">

            <DialogDescription
              className="
                text-[12px]
                font-medium
                leading-[18px]
                text-white/80
              "
            >
              Everything you need before booking.
              <br />
              Get our complete service guide instantly.
            </DialogDescription>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-4 grid h-[64px] grid-cols-4">

              {features.map(
                ([Icon, title, text], index) => (
                  <Feature
                    key={title}
                    icon={Icon}
                    title={title}
                    text={text}
                    last={
                      index ===
                      features.length - 1
                    }
                  />
                )
              )}

            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2.5
                text-center
              "
            >
              <Mail
                strokeWidth={2}
                className="
                  h-[18px]
                  w-[18px]
                  shrink-0
                  text-[#f6bf3f]
                "
              />

              <p
                className="
                  text-[11px]
                  font-medium
                  leading-[16px]
                  text-white/80
                "
              >
                Enter your details and we'll send the brochure{' '}

                <span className="font-semibold text-[#f6bf3f]">
                  instantly via Email.
                </span>
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submit)}
                className="mt-3 space-y-2"
              >

                {/* TEXT FIELDS */}

                {fields.map(
                  ({
                    name,
                    placeholder,
                    icon: Icon,
                    type,
                    autoComplete,
                  }) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem className="space-y-1">

                          <FormLabel className="sr-only">
                            {placeholder}
                          </FormLabel>

                          <FormControl>
                            <div className="relative">

                              <Icon
                                strokeWidth={2}
                                className={iconClass}
                              />

                              <Input
                                {...field}
                                type={type}
                                autoComplete={autoComplete}
                                placeholder={placeholder}
                                className={inputClass}
                              />

                            </div>
                          </FormControl>

                          <FormMessage
                            className={errorClass}
                          />

                        </FormItem>
                      )}
                    />
                  )
                )}

                {/* =================================================
                    SERVICE
                ================================================= */}

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="space-y-1">

                      <FormLabel className="sr-only">
                        Select Service
                      </FormLabel>

                      <div className="relative">

                        <ListChecks
                          strokeWidth={2}
                          className={iconClass}
                        />

                        <Select
                          value={field.value}
                          onValueChange={
                            field.onChange
                          }
                        >
                          <FormControl>
                            <SelectTrigger
                              className="
                                h-[42px]
                                rounded-lg
                                border-white/35
                                bg-black/75
                                pl-11
                                pr-3
                                text-[13px]
                                font-medium
                                text-white
                                shadow-none
                                focus:border-[#f6bf3f]
                                focus:ring-1
                                focus:ring-[#f6bf3f]/50
                              "
                            >
                              <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent
                            className="
                              z-[200]
                              border-white/20
                              bg-[#0b0b0b]
                              text-white
                            "
                          >
                            {services.map(
                              ({
                                id,
                                title,
                              }) => (
                                <SelectItem
                                  key={id}
                                  value={title}
                                  className="
                                    py-2.5
                                    text-[13px]
                                    font-medium
                                    focus:bg-[#f6bf3f]
                                    focus:text-black
                                  "
                                >
                                  {title}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>

                      </div>

                      <FormMessage
                        className={errorClass}
                      />

                    </FormItem>
                  )}
                />

                {/* =================================================
                    CTA
                ================================================= */}

                <Button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    h-[48px]
                    w-full
                    rounded-lg
                    border
                    border-[#ffe08a]
                    bg-gradient-to-b
                    from-[#ffdc72]
                    via-[#f6bf3f]
                    to-[#d99b1e]
                    text-[13px]
                    font-black
                    uppercase
                    tracking-[0.02em]
                    text-black
                    shadow-[0_6px_22px_rgba(246,191,63,.25)]
                    transition-all
                    duration-200
                    hover:-translate-y-[1px]
                    hover:from-[#ffe590]
                    hover:via-[#ffc94f]
                    hover:to-[#e5a627]
                    hover:text-black
                    disabled:pointer-events-none
                    disabled:opacity-70
                  "
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                      Sending...
                    </>
                  ) : (
                    <>
                      <span
                        className="
                          mr-2
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-black
                          text-[#f6bf3f]
                        "
                      >
                        <Send
                          strokeWidth={2.5}
                          className="h-4 w-4"
                        />
                      </span>

                      Send Me The Brochure
                    </>
                  )}
                </Button>

              </form>
            </Form>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                mt-3
                grid
                h-[64px]
                grid-cols-3
                overflow-hidden
                rounded-lg
                border
                border-white/25
                bg-black/50
              "
            >
              {stats.map(
                ([Icon, value, label], index) => (
                  <div
                    key={label}
                    className={`
                      flex
                      items-center
                      justify-center
                      gap-2.5
                      px-2

                      ${
                        index < stats.length - 1
                          ? 'border-r border-white/25'
                          : ''
                      }
                    `}
                  >
                    <Icon
                      strokeWidth={2}
                      className={`
                        h-[22px]
                        w-[22px]
                        shrink-0
                        text-[#f6bf3f]

                        ${
                          label ===
                          'Customer Rating'
                            ? 'fill-[#f6bf3f]'
                            : ''
                        }
                      `}
                    />

                    <div>
                      <strong
                        className="
                          block
                          text-[13px]
                          font-black
                          leading-none
                          text-white
                        "
                      >
                        {value}
                      </strong>

                      <span
                        className="
                          mt-1.5
                          block
                          text-[8px]
                          font-medium
                          uppercase
                          leading-none
                          text-white/75
                        "
                      >
                        {label}
                      </span>
                    </div>

                  </div>
                )
              )}
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};