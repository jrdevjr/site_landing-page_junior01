type AvatarContainerPorps = {
    children: React.ReactNode;
}

export const AvatarContainer = ({ children}: AvatarContainerPorps) => {
    return (
        <div className="flex items-center gap-3">
          {children}
        </div>
    )
}