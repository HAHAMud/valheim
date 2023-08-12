import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function CardList({ children }: Props) {
  return <div className="flex flex-wrap items-center justify-start p-24">{children}</div>;
}
