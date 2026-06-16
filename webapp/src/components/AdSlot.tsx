import React from "react";

interface AdSlotProps {
  type: "native" | "banner-300" | "banner-728" | "sidebar";
  id: string;
  className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ type, id, className = "" }) => {
  if (type === "banner-300") {
    return (
      <div
        id={id}
        className={`mx-auto flex h-[250px] w-[300px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted text-muted-foreground ${className}`}
        data-ad-type="banner-300"
      >
        <span className="text-xs font-medium">Ad 300×250</span>
      </div>
    );
  }

  if (type === "banner-728") {
    return (
      <div
        id={id}
        className={`mx-auto flex h-[90px] w-full max-w-[728px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted text-muted-foreground ${className}`}
        data-ad-type="banner-728"
      >
        <span className="text-xs font-medium">Ad 728×90</span>
      </div>
    );
  }

  if (type === "sidebar") {
    return (
      <div
        id={id}
        className={`flex h-[600px] w-[300px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted text-muted-foreground ${className}`}
        data-ad-type="sidebar"
      >
        <span className="text-xs font-medium">Ad 300×600</span>
      </div>
    );
  }

  // Native ad
  return (
    <div
      id={id}
      className={`flex w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted p-8 text-muted-foreground ${className}`}
      data-ad-type="native"
    >
      <span className="text-xs font-medium">Sponsored Content</span>
    </div>
  );
};

export default AdSlot;
