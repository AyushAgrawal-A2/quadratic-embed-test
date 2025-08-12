"use client";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1>Quadratic - WorkOS - https://ayush-workos.quadratic-preview.com</h1>

        <iframe
          src="https://ayush-workos.quadratic-preview.com"
          allow="cross-origin-isolated; storage-access"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-storage-access-by-user-activation allow-forms allow-popups-to-escape-sandbox clipboard-read clipboard-write"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>
          Quadratic - WorkOS (Public File) -
          https://ayush-workos.quadratic-preview.com/file/794b95d4-b222-4be7-8380-ea869b5cc7f3
        </h1>

        <iframe
          src="https://ayush-workos.quadratic-preview.com/file/794b95d4-b222-4be7-8380-ea869b5cc7f3"
          allow="cross-origin-isolated; storage-access"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-storage-access-by-user-activation allow-forms allow-popups-to-escape-sandbox clipboard-read clipboard-write"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>Quadratic - Prod (Auth0) - https://app.quadratichq.com</h1>

        <iframe
          src="https://app.quadratichq.com"
          allow="cross-origin-isolated; storage-access"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-storage-access-by-user-activation allow-forms allow-popups-to-escape-sandbox clipboard-read clipboard-write"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>
          Quadratic - Prod (Public File) -
          https://app.quadratichq.com/file/3eb0a466-0445-4cff-94a7-006f10aeddc9
        </h1>

        <iframe
          src="https://app.quadratichq.com/file/3eb0a466-0445-4cff-94a7-006f10aeddc9"
          allow="cross-origin-isolated; storage-access"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-storage-access-by-user-activation allow-forms allow-popups-to-escape-sandbox clipboard-read clipboard-write"
          style={{ width: "80%", height: "768px" }}
        />
      </div>
    </div>
  );
}
