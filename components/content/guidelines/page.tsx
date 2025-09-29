import Image from "next/image";

export default function GuidelinesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 text-justify">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="/images/footer.png"
          alt="Hacker News"
          width={40}
          height={40}
          className="rounded"
          priority
        />
        <h1 className="text-3xl font-bold text-orange-600 tracking-tight">
          Hacker News Guidelines
        </h1>
      </div>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        What to Submit
      </h2>
      <p className="mt-2 leading-relaxed">
        On-Topic: Anything that good hackers would find interesting. That
        includes more than hacking and startups. If you had to reduce it to a
        sentence, the answer might be: anything that gratifies one&#39;s
        intellectual curiosity.
      </p>
      <p className="mt-2 leading-relaxed">
        Off-Topic: Most stories about politics, or crime, or sports, or
        celebrities, unless they&#39;re evidence of some interesting new
        phenomenon. Videos of pratfalls or disasters, or cute animal pictures.
        If they&#39;d cover it on TV news, it&#39;s probably off-topic.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        In Submissions
      </h2>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t do things to make titles stand out, like using uppercase
        or exclamation points, or saying how great an article is. It&#39;s
        implicit in submitting something that you think it&#39;s important.
      </p>
      <p className="mt-2 leading-relaxed">
        Please submit the original source. If a post reports on something found
        on another site, submit the latter.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t use HN primarily for promotion. It&#39;s ok to post your
        own stuff part of the time, but the primary use of the site should be
        for curiosity.
      </p>
      <p className="mt-2 leading-relaxed">
        If the title includes the name of the site, please take it out, because
        the site name will be displayed after the link.
      </p>
      <p className="mt-2 leading-relaxed">
        If the title contains a gratuitous number or number + adjective,
        we&#39;d appreciate it if you&#39;d crop it. E.g. translate &quot;10
        Ways To Do X&quot; to &quot;How To Do X,&quot; and &quot;14 Amazing
        Ys&quot; to &quot;Ys.&quot; Exception: when the number is meaningful,
        e.g. &quot;The 5 Platonic Solids.&quot;
      </p>
      <p className="mt-2 leading-relaxed">
        Otherwise please use the original title, unless it is misleading or
        linkbait; don&#39;t editorialize.
      </p>
      <p className="mt-2 leading-relaxed">
        If you submit a video or pdf, please warn us by appending [video] or
        [pdf] to the title.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t post on HN to ask or tell us something. Send it to
        hn@ycombinator.com.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t delete and repost. Deletion is for things that
        shouldn&#39;t have been submitted in the first place.
      </p>
      <p className="mt-2 leading-relaxed">
        Don&#39;t solicit upvotes, comments, or submissions. Users should vote
        and comment when they run across something they personally find
        interesting—not for promotion.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        In Comments
      </h2>
      <p className="mt-2 leading-relaxed">
        Be kind. Don&#39;t be snarky. Converse curiously; don&#39;t
        cross-examine. Edit out swipes.
      </p>
      <p className="mt-2 leading-relaxed">
        Comments should get more thoughtful and substantive, not less, as a
        topic gets more divisive.
      </p>
      <p className="mt-2 leading-relaxed">
        When disagreeing, please reply to the argument instead of calling names.
        &quot;That is idiotic; 1 + 1 is 2, not 3&quot; can be shortened to
        &quot;1 + 1 is 2, not 3.&quot;
      </p>
      <p className="mt-2 leading-relaxed">
        Don&#39;t be curmudgeonly. Thoughtful criticism is fine, but please
        don&#39;t be rigidly or generically negative.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t fulminate. Please don&#39;t sneer, including at the
        rest of the community.
      </p>
      <p className="mt-2 leading-relaxed">
        Please respond to the strongest plausible interpretation of what someone
        says, not a weaker one that&#39;s easier to criticize. Assume good
        faith.
      </p>
      <p className="mt-2 leading-relaxed">Eschew flamebait. Avoid generic tangents. Omit internet tropes.</p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t post shallow dismissals, especially of other
        people&#39;s work. A good critical comment teaches us something.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t use Hacker News for political or ideological battle. It
        tramples curiosity.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t comment on whether someone read an article. &quot;Did
        you even read the article? It mentions that&quot; can be shortened to
        &quot;The article mentions that&quot;.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t pick the most provocative thing in an article or post
        to complain about in the thread. Find something interesting to respond
        to instead.
      </p>
      <p className="mt-2 leading-relaxed">
        Throwaway accounts are ok for sensitive information, but please don&#39;t
        create accounts routinely. HN is a community—users should have an
        identity that others can relate to.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t use uppercase for emphasis. If you want to emphasize a
        word or phrase, put *asterisks* around it and it will get italicized.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t post insinuations about astroturfing, shilling,
        brigading, foreign agents, and the like. It degrades discussion and is
        usually mistaken. If you&#39;re worried about abuse, email
        hn@ycombinator.com and we&#39;ll look at the data.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t complain that a submission is inappropriate. If a story
        is spam or off-topic, flag it. Don&#39;t feed egregious comments by
        replying; flag them instead. If you flag, please don&#39;t also comment
        that you did.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t complain about tangential annoyances—e.g. article or
        website formats, name collisions, or back-button breakage. They&#39;re
        too common to be interesting.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t comment about the voting on comments. It never does any
        good, and it makes boring reading.
      </p>
      <p className="mt-2 leading-relaxed">
        Please don&#39;t post comments saying that HN is turning into Reddit.
        It&#39;s a semi-noob illusion, as old as the hills.
      </p>
    </div>
  );
}
