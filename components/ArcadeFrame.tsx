type Props = {
  children: React.ReactNode;
};

export default function ArcadeFrame({ children }: Props) {
  return (
    <div className="arcade-frame">

      {children}

    </div>
  );
}