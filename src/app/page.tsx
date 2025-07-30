export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1>Quadratic - WorkOS - http://localhost:3000</h1>

        <iframe
          src="https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S722172662%3A1753858973397423&access_type=offline&client_id=731872539435-t0tlnivr3ha0bvrlj95r5llrqbucahri.apps.googleusercontent.com&o2v=2&redirect_uri=https%3A%2F%2Fauth.workos.com%2Fsso%2Foauth%2Fgoogle%2Fcallback&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&service=lso&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGkiOiJ1c2VyX21hbmFnZW1lbnQiLCJyZWRpcmVjdF91cmkiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4tY2FsbGJhY2siLCJzdGF0ZSI6IntcInJlZGlyZWN0VG9cIjpcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbi1yZXN1bHRcIn0iLCJlbnZpcm9ubWVudF9pZCI6ImVudmlyb25tZW50XzAxSlhXUjc3WVIyMzFFQjg3REFGSDk0OTJBIiwiaWF0IjoxNzUzODU4OTczLCJleHAiOjE3NTM4NTk4NzN9.3HrX6wemitYXFY2WFwFOr8j0ONbIk4shjucUpXJq5Lk&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMAgpH6MuwTFKDuV_S1V0dvT74ajj_bYwAvU6dGLZRDW70FyGrRK-By-NeG0oNJcxOCvdGnL2zJUup1-oLU3KfbPB_smxLrX2twKdzkde0kPoyndKOre0RLmrYWs_mQnqFojpsmytho7y27H4lyx4hs-Sr-wD7NIZOzkwbDPKUXXDMURN4tKBCnskqwWEIE9X6fX0i3lOtxjv41bWcw2K0qbwsG4auDeSDNeHGyU3OBUd7Y6jvW3R9g_G9E__U1KpNigj2D-BBomqllfahjcA1H5JgikmEtQfQzqinoXushGVyckJSwJj-9dGbFJ3uyVNptYsPP8cq4lV0vHY1MNksvWyIRixT2ok9VrqKBiXC2BWrH_d3fUGtTogqqtOofF6UyHdbjzI7uiRf-dGm9oEvSC9T69-ZQrokZQ9T1sNOQluam9U_EQqxlvvwo4dI3xtrUfLhoQJVNlkL55iAvPAffqbh38g%26flowName%3DGeneralOAuthFlow%26as%3DS722172662%253A1753858973397423%26client_id%3D731872539435-t0tlnivr3ha0bvrlj95r5llrqbucahri.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fauth.workos.com&rart=ANgoxcfnKwB3xrL0UnvjmPQP273b2mgwsJ2I2zqcMn1b0PuL5CODPk9u_4bNntw8HAYLTzW745C1KMnMofxnVjgaHxSs7p80p7JLHdgAu2zdEfzvQJj2TE8"
          allow="cross-origin-isolated"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>
          Quadratic - WorkOS (Public File) -
          http://localhost:3000/file/2d17fdb4-647e-4e04-bdd6-1153100272ee
        </h1>

        <iframe
          src="http://localhost:3000/file/2d17fdb4-647e-4e04-bdd6-1153100272ee"
          allow="cross-origin-isolated"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>Quadratic - WorkOS - https://ayush-workos.quadratic-preview.com</h1>

        <iframe
          src="https://ayush-workos.quadratic-preview.com"
          allow="cross-origin-isolated"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>
          Quadratic - WorkOS (Public File) -
          https://ayush-workos.quadratic-preview.com/file/a9f803c6-fa0c-4823-8042-fafdbd9ec589
        </h1>

        <iframe
          src="https://ayush-workos.quadratic-preview.com/file/a9f803c6-fa0c-4823-8042-fafdbd9ec589"
          allow="cross-origin-isolated"
          style={{ width: "80%", height: "768px" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1>Quadratic - Prod (Auth0) - https://app.quadratichq.com</h1>

        <iframe
          src="https://app.quadratichq.com"
          allow="cross-origin-isolated"
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
          allow="cross-origin-isolated"
          style={{ width: "80%", height: "768px" }}
        />
      </div>
    </div>
  );
}
