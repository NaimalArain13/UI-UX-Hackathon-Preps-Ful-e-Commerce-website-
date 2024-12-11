import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
function BreadCrumb({
  route1,
  route2,
  route3,
}: {
  route1: string;
  route2?: string;
  route3?: string;
}) {
  return (
    <div className="hidden sm:flex">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">{route1}</BreadcrumbPage>
          </BreadcrumbItem>
          {route2 && (
            <div>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold">{route2}</BreadcrumbPage>
              </BreadcrumbItem>
            </div>
          )}
          {route3 && (
            <div>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold">{route3}</BreadcrumbPage>
              </BreadcrumbItem>
            </div>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
