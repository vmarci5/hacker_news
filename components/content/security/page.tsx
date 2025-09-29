import Link from "next/link";
import Image from "next/image";
export default function SecurityPage() {
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
          Hacker News Security
        </h1>
      </div>

      <p className="mt-2 leading-relaxed">
        If you find a security hole, please let us know at{" "}
        <Link href="mailto:security@ycombinator.com">
          security@ycombinator.com
        </Link>
        . We try to respond (with fixes!) as soon as possible, and really
        appreciate the help.
      </p>
      <p className="mt-2 leading-relaxed">
        Thanks to the following people who have discovered and responsibly
        disclosed security holes in Hacker News:
      </p>
      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2025-07-08: Benjamin Flesch
      </h2>
      <p>Poll options could be used for XSS.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2023-01-02: Carter Sande, Mark Slater, James Darpinian
      </h2>
      <p>Submission titles were no longer being HTML-escaped in some places.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2022-09-04: Dimitris Triantafyllidis
      </h2>
      <p>User karma could be increased by exploiting an upvote/unvote bug.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2021-07-04: RyotaK
      </h2>
      <p>URL tricks could display the wrong domain for some websites.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2021-06-07: Atamyrat Hezretgulyyev
      </h2>
      <p>A CSRF logout was still possible in some cases.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2021-02-14: Michael Brooks
      </h2>
      <p>Set the SameSite cookie attribute for better CSRF protection.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2017-04-30: Michael Flaxman
      </h2>
      <p>
        The minor version of bcrypt used for passwords was susceptible to a
        collision in some cases.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2017-04-14: Blake Rand
      </h2>
      <p>Links in comments were vulnerable to an IDN homograph attack.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2017-03-15: Blake Rand
      </h2>
      <p>
        The right-to-left override character could be used to obscure link text
        in comments.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2017-03-01: Jaikishan Tulswani
      </h2>
      <p>Logged-in users could bypass &#39;old password&#39; form field.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2016-02-17: Eric Tjossem
      </h2>
      <p>Logout and login were vulnerable to CSRF.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2016-01-13: Mert Taşçi
      </h2>
      <p>The &#39;forgot password&#39; link was vulnerable to reflected XSS.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2015-09-07: Sandeep Singh
      </h2>
      <p>
        An open redirect was possible by passing a URL with a mixed-case
        protocol as the goto parameter.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2015-09-04: Manish Bhattacharya
      </h2>
      <p>
        The site name display for stories was vulnerable to an IDN homograph
        attack.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2015-08-27: Chris Marlow
      </h2>
      <p>Revisions to HN&#39;s markup caused an HTML injection regression.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2015-06-24: Stephen Sclafani
      </h2>
      <p>
        A form handling bug led to a XSS vulnerability using HTTP parameter
        pollution.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2015-03-02: Max Bond
      </h2>
      <p>
        Information leaked during /r processing allowed an attacker to discover
        valid profile edit links and the user for which they were valid.
      </p>
      <p>goto parameters functioned as open redirects.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2014-11-01: Ovidiu Toader
      </h2>
      <p>
        In rare cases some users&#39; profiles (including email addresses and
        password hashes) were mistakenly published to the Firebase API. More
        here.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2014-10-27: San Tran
      </h2>
      <p>
        Some pages displaying forms were vulnerable to reflected XSS when
        provided malformed query string arguments.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2014-05-01: Jonathan Rudenberg
      </h2>
      <p>Some YC internal pages were vulnerable to persistent XSS.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2012-08-01: Louis Lang
      </h2>
      <p>
        Redirects were vulnerable to HTTP response splitting via the whence
        argument.
      </p>
      <p>Persistent XSS could be achieved via the X-Forwarded-For header.</p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2012-07-20: Michael Borohovski
      </h2>
      <p>
        Incorrect handling of unauthenticated requests meant anyone could change
        rsvp status for Demo Day.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2010-01-12: Zain Memon
      </h2>
      <p>
        Someone creating a new account could sometimes take an existing
        username.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        2009-06-03: Daniel Fox Franke
      </h2>
      <p>
        The state of the PRNG used to generate cookies could be determined from
        observed outputs. This allowed an attacker to fairly easily determine
        valid user cookies and compromise accounts. More here.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-orange-500">
        Missing From This List?
      </h2>
      <p>
        If you reported a vulnerability to us and don&#39;t see your name,
        please shoot us an email and we&#39;ll happily add you. We crawled
        through tons of emails trying to find all reports but inevitably missed
        some.
      </p>
    </div>
  );
}
