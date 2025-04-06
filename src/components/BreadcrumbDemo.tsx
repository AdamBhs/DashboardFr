import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { upperCase } from '@/utils/helpers'
import React from 'react'

interface propsType {
  path: Array<string>
}
export function BreadcrumbDemo({ path }: propsType) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.map((value, index) => (
          <React.Fragment key={index}>
            {index >= 1 ? <BreadcrumbSeparator /> : null}
            <BreadcrumbItem>
              <BreadcrumbLink className={index == path.length - 1 ? 'text-[#4658AC]' : ''}>
                {upperCase(value)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
