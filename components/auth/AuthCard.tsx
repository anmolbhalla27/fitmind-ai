import { ReactNode } from "react";

type AuthCardProps = {
    children: ReactNode;
};

export default function AuthCard({
    children,
}: AuthCardProps) {
    return (
        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur">
            {children}
        </div>
    );
}