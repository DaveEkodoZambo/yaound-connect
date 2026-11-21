<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep monument descriptions and asset references in a shared browser-safe data module, with a gallery leaf and a slug-based detail leaf, so content and navigation stay consistent.
- Keep urban project facts in a browser-safe data module shared by the listing and slug detail routes; separate illustrative image imports so factual data can be tested without a media loader.
