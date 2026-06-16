import React, { useEffect, useRef } from "react";

type AdType = "popunder" | "banner-728" | "banner-300" | "native" | "social-bar";

interface AdSlotProps {
  type: AdType;
}

function injectScript(
  parent: HTMLElement,
  attrs: Record<string, string> = {},
  src?: string
): HTMLScriptElement {
  const script = document.createElement("script");
  script.type = "text/javascript";
  for (const [key, value] of Object.entries(attrs)) {
    script.setAttribute(key, value);
  }
  if (src) {
    script.src = src;
  }
  parent.appendChild(script);
  return script;
}

export default function AdSlot({ type }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || injectedRef.current) return;

    // Flag to prevent double injection across React strict mode / hot reload
    const container = containerRef.current;
    const flagKey = `__adInjected_${type}`;
    if ((window as Record<string, unknown>)[flagKey]) return;
    (window as Record<string, unknown>)[flagKey] = true;
    injectedRef.current = true;

    if (type === "popunder") {
      injectScript(
        container,
        {},
        "https://pl29763343.effectivecpmnetwork.com/fa/c5/2e/fac52e793a9842c90f533b5380ed1dbc.js"
      );
    }

    if (type === "banner-728") {
      const atOptions = document.createElement("script");
      atOptions.type = "text/javascript";
      atOptions.text = `
        atOptions = {
          'key' : '4428d04f24f7240a987e9ddf4e0c117c',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      container.appendChild(atOptions);
      injectScript(
        container,
        {},
        "//www.highperformanceformat.com/4428d04f24f7240a987e9ddf4e0c117c/invoke.js"
      );
    }

    if (type === "banner-300") {
      const atOptions = document.createElement("script");
      atOptions.type = "text/javascript";
      atOptions.text = `
        atOptions = {
          'key' : '5a80ce7f116946c73b77837f2eb661f6',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      container.appendChild(atOptions);
      injectScript(
        container,
        {},
        "//www.highperformanceformat.com/5a80ce7f116946c73b77837f2eb661f6/invoke.js"
      );
    }

    if (type === "native") {
      injectScript(container, {
        async: "true",
        "data-cfasync": "false",
      }, "https://pl29763344.effectivecpmnetwork.com/8b7696e02f356d6562fb7d33ae23ef75/invoke.js");

      const nativeContainer = document.createElement("div");
      nativeContainer.id = "container-8b7696e02f356d6562fb7d33ae23ef75";
      container.appendChild(nativeContainer);
    }

    if (type === "social-bar") {
      injectScript(
        container,
        {},
        "https://pl29763345.effectivecpmnetwork.com/ca/52/26/ca5226567c13e5d31689b0c86207ae74.js"
      );
    }

    return () => {
      // Cleanup: remove injected scripts on unmount
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, [type]);

  // Popunder: invisible div
  if (type === "popunder") {
    return (
      <div
        ref={containerRef}
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        aria-hidden="true"
      />
    );
  }

  // Social bar: sticky bottom
  if (type === "social-bar") {
    return (
      <div
        ref={containerRef}
        className="fixed bottom-0 left-0 right-0 z-[100]"
        aria-hidden="true"
      />
    );
  }

  // Banner 728x90
  if (type === "banner-728") {
    return (
      <div
        ref={containerRef}
        className="w-[728px] h-[90px] mx-auto my-4 hidden md:block"
        aria-hidden="true"
      />
    );
  }

  // Banner 300x250
  if (type === "banner-300") {
    return (
      <div
        ref={containerRef}
        className="w-[300px] h-[250px] mx-auto my-4"
        aria-hidden="true"
      />
    );
  }

  // Native ad
  if (type === "native") {
    return <div ref={containerRef} className="my-4" aria-hidden="true" />;
  }

  return <div ref={containerRef} aria-hidden="true" />;
}
