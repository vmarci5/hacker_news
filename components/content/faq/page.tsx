import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function FaqPage() {
  return (
    <>
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
            Hacker News FAQ
          </h1>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Are there rules about submissions and comments?
        </h2>
        <p className="mb-6">
          Yes. See the{" "}
          <Link href="/footer/guidelines">
            <Button className="bg-orange-500 cursor-pointer">Guidelines</Button>
          </Link>
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How are stories ranked?
        </h2>
        <p>
          The basic algorithm divides points by a power of the time since a
          story was submitted. Comments in threads are ranked the same way.
        </p>
        <p className="mb-6">
          Other factors affecting rank include user flags, anti-abuse software,
          software which demotes overheated discussions, account or site
          weighting, and moderator action.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How is a user&#39;s karma calculated?
        </h2>
        <p className="mb-6">
          Roughly, the number of upvotes on their posts minus the number of
          downvotes. These don&#39;t match up exactly. Some votes are dropped by
          anti-abuse software.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Do posts by users with more karma rank higher?
        </h2>
        <p className="mb-6">No.</p>
    <hr />
        <h2 className="mt-3 text-xl font-semibold text-orange-500">
          Why don&#39;t I see down arrows?
        </h2>
        <p className="mb-6">
          There are no down arrows on stories. They appear on comments after
          users reach a certain karma threshold, but never on direct replies.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What kind of formatting can you use in comments?
        </h2>
        <p className="mb-6">
          Check out the formatting guide here:{" "}
          <Link href="http://news.ycombinator.com/formatdoc">
            <Button className="bg-orange-500 cursor-pointer">
              Format guide
            </Button>
          </Link>
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How do I submit a question?
        </h2>
        <p className="mb-6">
          Use the submit link in the top bar, and leave the url field blank.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How do I submit a poll?
        </h2>
        <p className="mb-6">
          <Link href="http://news.ycombinator.com/newpoll">
            <Button className="bg-orange-500 cursor-pointer">
              Use the poll submission form
            </Button>
          </Link>
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How do I make a link in a text submission?
        </h2>
        <p className="mb-6">
          You can&#39;t. This is to prevent people from submitting a link with
          their comments in a privileged position at the top of the page. If you
          want to submit a link with comments, just submit the link, then add a
          regular comment.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What are Ask HN and Show HN?
        </h2>
        <p className="mb-6">
          Ask HN lists questions and other text submissions. Show HN is for
          sharing your personal work and has special rules.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Why hasn&#39;t my submission appeared on Ask HN or Show HN?
        </h2>
        <p className="mb-6">
          All Ask HNs appear on newest and asknew, and all Show HNs on newest
          and shownew, but there is a small points threshold before a post makes
          it to ask or show.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What do green usernames mean?
        </h2>
        <p className="mb-6">Green indicates a new account.</p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Why are some comments faded?
        </h2>
        <p className="mb-6">
          Faded text means that a comment has been downvoted. You can read the
          comment in normal text by clicking on its timestamp to go to its page.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What does [flagged] mean?
        </h2>
        <p>
          Users flagged the post as breaking the guidelines or otherwise not
          belonging on HN.
        </p>
        <p className="mb-6">
          Moderators sometimes also add [flagged] (though not usually on
          submissions), and sometimes turn flags off when they are unfair.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How do I flag a comment?
        </h2>
        <p className="mb-6">
          Click on its timestamp to go to its page, then click the
          &#39;flag&#39; link at the top. There&#39;s a small karma threshold
          before flag links appear.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What does [dead] mean?
        </h2>
        <p>The post was killed by software, user flags, or moderators.</p>
        <p>
          Dead posts aren&#39;t displayed by default, but you can see them all
          by turning on &#39;showdead&#39; in your profile.
        </p>
        <p className="mb-6">
          If you see a [dead] post that shouldn&#39;t be dead, you can vouch for
          it. Click on its timestamp to go to its page, then click
          &#39;vouch&#39; at the top. When enough users do this, the post is
          restored. There&#39;s a small karma threshold before vouch links
          appear.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What does [deleted] mean?
        </h2>
        <p className="mb-6">
          The author deleted the post, or asked us to. Unlike dead posts, these
          remain deleted even when showdead is turned on.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What do &#39;hide&#39; links do?
        </h2>
        <p className="mb-6">
          They remove a submission from your personal view. Others still see it.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Are reposts ok?
        </h2>
        <p>
          If a story has not had significant attention in the last year or so, a
          small number of reposts is ok. Otherwise we bury reposts as
          duplicates.
        </p>
        <p className="mb-6">
          Please don&#39;t delete and repost the same story. Deletion is for
          things that shouldn&#39;t have been submitted in the first place.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Are paywalls ok?
        </h2>
        <p>
          It&#39;s ok to post stories from sites with paywalls that have
          workarounds.
        </p>
        <p className="mb-6">
          In comments, it&#39;s ok to ask how to read an article and to help
          other users do so. But please don&#39;t post complaints about
          paywalls. Those are off topic. More here.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Can I ask people to upvote my submission?
        </h2>
        <p className="mb-6">
          No. Users should vote for a story because they personally find it
          intellectually interesting, not because someone has content to
          promote. We penalize or ban submissions, accounts, and sites that
          break this rule, so please don&#39;t.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Can I ask people to comment on my submission?
        </h2>
        <p className="mb-6">
          No, for the same reason. It&#39;s also not in your interest: HN
          readers are sensitive to this and will detect it, flag it, and use
          unkind words like &#39;spam&#39;.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Can I post a job ad?
        </h2>
        <p>Please don&#39;t post job ads as submissions to HN.</p>
        <p>
          A regular &quot;Who Is Hiring?&quot; thread appears on the first
          weekday of each month (or Jan 2). Most job ads are welcome there. Only
          an account called whoishiring is allowed to submit the thread itself.
          This prevents a race to post it first.
        </p>
        <p className="mb-6">
          Another kind of job ad is reserved for YC-funded startups. These
          appear on the front page, but are not stories: they have no vote
          arrows, points, or comments. They begin part-way down and fall
          steadily. Only one is on the front page at a time. The rest are listed
          at jobs.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          What&#39;s the relationship between YC and HN?
        </h2>
        <p>
          Y Combinator owns and funds HN. The HN team is editorially
          independent.
        </p>
        <p className="mb-6">
          HN gives three features to YC: job ads (see above) and startup
          launches get placed on the front page, and YC founder names are
          displayed to other YC alumni in orange.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Are negative stories about YC suppressed on HN?
        </h2>
        <p className="mb-6">
          No, we moderate less, not more, when YC or a YC startup is the topic.
          The good will of the community is worth more than any story.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Why can&#39;t I post a comment to a thread?
        </h2>
        <p className="mb-6">
          Threads are closed to new comments after two weeks, or if the
          submission has been killed by software, moderators, or user flags.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Why is A ranked below B even though A has more points and is newer?
        </h2>
        <p className="mb-6">
          You can&#39;t derive rank from votes and time alone. See &quot;How are
          stories ranked?&quot; above.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          In my profile, what is delay?
        </h2>
        <p className="mb-6">
          It gives you time to edit your comments before they appear to others.
          Set it to the number of minutes you&#39;d like. The maximum is 10.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          In my profile, what is noprocrast?
        </h2>
        <p className="mb-6">
          It&#39;s a way to help you prevent yourself from spending too much
          time on HN. If you turn it on you&#39;ll only be allowed to visit the
          site for maxvisit minutes at a time, with gaps of minaway minutes in
          between. The defaults are 20 and 180, which would let you view the
          site for 20 minutes at a time, and then not allow you back in for 3
          hours.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          How do I reset my password?
        </h2>
        <p className="mb-6">
          If you have an email address in your profile, you can do that here. If
          you haven&#39;t, email hn@ycombinator.com for help.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Can I change my username?
        </h2>
        <p className="mb-6">
          Yes. Email <span className="text-orange-700">hn@ycombinator.com</span>{" "}
          and we&#39;ll help.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          Can I delete my account?
        </h2>
        <p className="mb-6">
          We try not to delete entire account histories because that would gut
          the threads the account had participated in. However, we care about
          protecting individual users and take care of privacy requests every
          day, so if we can help, please email{" "}
          <span className="text-orange-700">hn@ycombinator.com</span>. We
          don&#39;t want anyone to get in trouble from anything they posted to
          HN. More here.
        </p>
    <hr />
        <h2 className="mt-6 text-xl font-semibold text-orange-500">
          My IP address seems to be banned. How can I unban it?
        </h2>
        <p>
          If you request many pages quickly, your IP address might get banned.
          This self-serve unbanning procedure works most of the time. If not,
          email <span className="text-orange-700">hn@ycombinator.com</span>.
        </p>
      </div>
    </>
  );
}
