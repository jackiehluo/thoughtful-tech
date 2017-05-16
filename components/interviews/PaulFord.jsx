import React, {Component} from 'react';

export default class PaulFord extends Component {

  static Name = "Paul Ford"

  render() {
    return (
      <div>
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          So one thing that I read that you wrote a couple years ago, which is how I found you on the internet in the first place, was your "What Is Code?" piece for Bloomberg. And I thought that was really good—I was wondering what you think about to what extent should everyone understand technology, and are there consequences if the general public doesn't understand? Or is it maybe a responsibility of tech companies to make it more transparent and easy?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          So, first of all, I'll tell you just an anecdote, which is that my dad was an English professor, and he was very motivated by technology, just found it really interesting. And so, growing up, he found both worlds—he did creative writing and he had plays produced but also found the world of just writing little programs really interesting—and so the things that I remember growing up would be going over and playing with computers with him when I was six or seven and then going and seeing his creative writing students line outside the door as he worked on the student magazine with them.
        </p>
        <p>
          And so I just saw the world as just fitting together really well, and there was a point he made a one point—I might have been thirteen—"You know, a program's a little bit like a poem, and you're trying to express as much as possible in as short an amount of space as possible." So there's always been this very blurry line between those two worlds for me that I didn't perceive growing up and that I had to learn existed.
        </p>
        <p>
          So when we talk about people learning... programming is a very, very discrete activity that has a tremendous amount of socioeconomic things hanging off of it right now. But thinking robustly about technology should not be divorced from a regular, canonical education, in my opinion. I'll give you an example.
        </p>
        <p>
          Right now, books on paper are having an economic resurgence. Sales are up and they're increasing over e-books. And people see this as some great, dynamic thing, but if you look at it—I feel like if you just Occam's razor the hell out of it—books are great. They work really well for a vast majority of high-density, especially visual, content. Typography on paper is still much better than typography on the screen. They definitely suck in terms of—like, I love having a hundred books on my Kindle, especially on the train. They tend to be a little more garbage-y.
        </p>
        <p>
          But then I just bought an academic book by a sociologist named Tressie Cottom, and every now and then, you buy a Kindle book, and they've laid it out like a book because the publisher won't compromise, and it's impossible to read. The text is bigger than the screen, and it doesn't reflow according to the Kindle's algorithms. And I'd much rather have just bought it on paper—I should have just gotten it on paper. And now it sucks because I can't just get a paper copy.
        </p>
        <p>
          So what I'm doing is a roundabout way of saying—the emphasis on technology as sort of the "other" thing is purely, to me, about money. And an enormous space has been created where people can make a ton of money, and they're very protective of that space. We've mythologized people like Elon Musk or Jeff Bezos, and they're really good, efficient capitalists, and they've built their empire on top of code. That's what they've done. They've built it on top of efficiency.
        </p>
        <p>
          But the mental models that got them there have existed for thousands of years. Like, codex books are really good technology. The alphabet is an excellent technology. Digitization has encoded all that, and I love it—it's my career—but I feel that because there's this sort of essential Luddite nature, especially in the humanistic disciplines, where technology is seen as something outside. You've gone and worked at an email company because you're probably a little obsessed with human communication patterns, right? You told me you were frustrated with email clients.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah.
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          You had some kind of mismatch in your brain between what you needed in communication and what you were getting. And then to the point that you went and worked at an email company. You could have worked somewhere else. And so you had a fundamentally human communication anthropological communication issue that you were trying to resolve, and it was internal. It was some gap that wasn't filled to the point that you're going to go make those tools.
        </p>
        <p>
          The thing that all the tech has done is it's made it—you had this problem that you wanted to solve, and, fifty years ago, you would have just had to go, "Well, I'm going to make a list in a notebook this way," or, "I'll format my letters a little differently with my typewriter." But you now live in this world where you can go and be like, "I'm going to create some new abstractions on top of human communication, and I'm going to work with people who also share my vision about those abstractions. And I'm going to code those, and then I'm going to seek to effect changes in human behavior because of the work I do."
        </p>
        <p>
          So that's the one thing that I think is really, really different. That it didn't used to be possible unless you just could gain a lot of power—government power or whatever—where you could make people change their behavior to that level, that quickly, using something like a piece of software to download. So understanding and talking about those power dynamics, seeing them as an extension of the last ten thousand years of history and freaking out less about the computer being this other entity  or the internet being this other entity—just seeing it as an expression of humans being humans.
        </p>
        <p>
          That is something that should be a conversation, all the way through school. In the same way that I think that advertising should be—middle schoolers should learn. They're completely attacked by it on all sides. They should learn how to make ads. They should advertise the crap out of everything. You want to give people control over the forms.
        </p>
        <p>
          So that's the very, very longwinded way to answer your question, which is that—should everyone learn to code? Everyone should seek to empower themselves to understand more about the world that they're in. Coding is not communicated as a path to that. It's communicated as a way to riches or a socioeconomic ladder. There's a way to look at it where you can be like, "This is a way to explore and understand the world." You could never have parsed all the census data yourself—but you can now. You can download it and mess with it. If you want your own portrait of America based on census data, you can hit an FTP server, download it, and run a Python script. You'd probably have something in an hour. That's a very different attitude toward the census than you could have had thirty, forty, years ago.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah. It's interesting because what you were talking about, in terms of coding being sort of a natural expression of the way people think—it's weird because I felt like that? I was very intimidated by it initially, and then when I was learning it, I was like, "Wow, this all makes so much sense."
        </p>

        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          I think we've created a priestly class, right? But most of it—the vast majority—if you can get algebra, you can code. And we've created this sense of the supergenius programmer. And there are supergenius parts that are really hard—they're just hard, and you can learn them over years, and maybe you're one of the small cluster of people who are really good at it. I'm not. I had to learn it painfully, and I was never good as a kid, but I decided I wanted to get some control over the computer. And it took me years. There's always stuff you can do along the way, too. You don't just have to be a programmer—you can do some HTML pages. It's not immediate, instant, six-figure salary, but there are things you can do.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          So you've talked a little bit about the idea of the 10x engineer. And so I wonder, why do you think these kinds of myths—or I don't know what you would call them, ideas—exist in tech and not other places? Is it the same sort of othering?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Well, it is—they do and they don't, right? I think there's absolutely the myth of the 10x lawyer. In philosophy, there's the myth of the 10x philosopher. Not just myths—it's actually encoded. Like [Saul] Kripke, right? I can't understand a single thing he's ever written down, but he's clearly seen as a 10x philosopher, except we just give him a Guggenheim fellowship and don't call it 10x. It's like anything—we like to mythologize certain aspects of human behavior, and some people are just god-awful smart and completely obsessed.
        </p>
        <p>
          I have a personal theory of human talent, which is that talent is basically what people are annoyed by. And if you are someone who has an enormous amount of time and you are a person with a certain amount of capacity—you are a very smart person and you have a lot of focus and you are allowed to obsess over a problem—you will shoot past everybody else. And that means that you probably don't have kids at home, you're probably fairly young, and you have time and space to [obsess].
        </p>
        <p>
          There are incredibly gifted, talented people in this field, like there are in any field. And they're not going to come work at your startup. They're going to go work on weird issues in cryptography. The real random supergeniuses of the world—they go find their place. People are looking for them. Harvard Math is looking for them, MIT is trying to absorb them. And there are places and structures for them to go think ridiculously abstract thoughts. And, you know, one of the smartest people I've met in the last year—I've probably sat down with four or five hundred people overall since starting this company—was a woman named Cathy O'Neil, who did a book called <i>Weapons of Math Destruction</i>.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Oh, yeah.
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          And she is the prototype—Harvard Math PhD, went and worked at hedge funds—just the archetypal math genius type. And she had started to pick apart algorithmic reasoning and thinking in a sort of social critic point of view. And I mean, you talk to her for ten minutes, and you're like, "Whew, wow, that is a really smart person." And so she's definitely ten times further along than most people thinking about algorithmic social issues. I think it's just like anything—you can't totally discount that some people are going to get you further. There's a ton of reasons why. But the people who have the most time and the resources to do exactly what they want and who are obsessed with and frustrated by the problem tend to make the most progress.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah. Cool. So another thing, then. You mentioned when you started using computers too much—or a normal amount—it started permeating into your subconscious life. And I identified with that a lot because I've probably had dreams about programming. Do you think that's just anything you do too much? Or do you think that's something sort of specific to computers?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          I think it's like anything you do too much, except that the things that you do on the computer tend to be very constrained. So I remember once I was playing Tetris all the times, and I had Tetris dreams. But if you think about it, it's just like your brain is in that little falling blocks space, and so you spend six, seven, hours there a week, and suddenly you're having a Tetris dream. I think that happens with people who are heavy-duty gamers, too—they're in the space of the game.
        </p>
        <p>
          Your brain doesn't where it is half the time. We assume we're these very present, conscious entities, but if you're watching TV, where are you? You're in your room, but you could also be in the fictional space that you're watching. I don't think it's unusual to have TV dreams.
        </p>
        <p>
          You know, I haven't had one of those in a long time. I remember having really clear Photoshop dreams because I was using lots of Photoshop. But these are cultural spaces that have been created. You've got your toolbar, and you have your set of things that you do—you blur, you draw a rectangle, you cut and paste. And as I learned more and more about the technology underneath—I now have a pretty good mental model of how the computer is operating—it's much less likely that I have that sensation because I'm just maybe a little more unimpressed. I'm way more aware of the technology I'm using being a technology created by people than I used to be. It doesn't take over my brain in quite the way that it used to.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Were you having dreams about <i>using</i> Photoshop?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Sure, sure. I was using Photoshop, I was blurring things. A face showed up in my dream, and then I would cut and paste parts from the dream.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Wow, weird.
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          This is years ago. Yeah. At that point, I was doing lots of design work, and I was spending six, eight, twelve hours a day in Photoshop.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah. Okay, so one other thing you talked about was differentiating between computers being good at math and computers seeming like they're good at math. Do you connect that with the idea of AI and sort of whether machines can have the more anthropomorphic qualities that we want to attribute to them?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          I mean, I think humans attribute anthropomorphic qualities to everything, right? You put eyes on a cardboard box, and people will be like, "Hey, what's happening there?" I don't know. Right now, everybody's very excited about machine learning, and computers are able to "intuit" things using neural networks. When I'm looking at that, what I'm seeing is the computer is able to write its own programs, that way, and that—but it's kind of a black box and it kind of isn't. I think we'll create better tools to help us understand the kind of patterns that are found by the neural networks.
        </p>
        <p>
          The history of AI has always been, "This amazing thing is going to happen to make the computer more like a person," and then by the time it actually happens, it's incredibly well understood as a mechanical process. So computer vision is a great example. Self-driving cars, for the most part, we're starting to culturally understand as a LIDAR and radar and laser assembly that spins around really fast on top of a car and quickly analyzes the space around, looking for 3D objects that could pose a threat. That doesn't sound like a baby recognizing a red ball.
        </p>
        <p>
          As these things come into our world and we start to deal with them as technologies, the anthropomorphization part gets separated out. You think it's going to be like, "Oh, now that computers can see, we're going to have this kind of relationship with them," but the reality is that we just take it for granted, and it gets cheaper, and we're like, "Yeah, okay, that's cool." You know. The car can drive itself now. That'll be fifteen, twenty, years from now—"Oh, the car can drive itself. Of course it can." And people talk about how awesome it is to have a car that you drive as opposed to letting the robot drive the car, in the same way that they talk about vinyl albums.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah, sure.
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Right? We get into the old technologies because they're very evocative when they're compared with the new stuff.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah. Do you think this gap between the technology, the AI, that we have, becoming no longer AI, it's just a tool, is partly a byproduct of just not understanding the human brain and how it works?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          I think that's it. We truly are still figuring out the brain, and then—yeah, things seem magical and new, and they get marketed to us. But the great electronic brain has been a myth since the 50s. My basic sense of reality is that it's physical, and my basic sense of technology is that Turing machines can simulate most things, so if you were to tell me that a computer could become an excellent simulator of human consciousness, I would buy it. And I don't know what steps you'd need to take—it's just Moore's Law. I think obviously some sort of processing happens at the neuron level that we don't fully understand and can't capture yet.
        </p>
        <p>
          And if you told me twenty years from now that this consciousness is equivalent to a specific human and it interacted with me and it deserved respect, I'd be like, "Sure." It's like, it would just be another weird consciousness that we need to respect in our world, right? I'm nice to dogs, too. I think people love to obsess with this problem, but it doesn't actually have a lot of bearing on doing better in your immediate [space]—it's great to worry about superintelligence and far less exhausting than dealing with human beings and worrying about the consequences of your own actions. Because it's a wonderful myth of rapture—where everything's like, "Rather than being nice to everybody today, we should probably figure out how to get ready for the coming AI apocalypse." That's way more fun than thinking about the fact that your car is destroying the planet.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah. Okay, so another thing, unrelated, but—you said at some point that coding favors blurters and people who make fast decisions. And some of the people I've been talking to—a lot of the recurring themes have been that there's so little oversight and decisions get made so quickly by so few people, in terms of technology that gets built and then has an impact on potentially billions of people. But it seems like there's a tension between wanting to slow down that process and—
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Well, you're not talking about coding, then, really—the engineering culture favors blurters. The better code tends to be written by careful, meditative people. The stuff that powers rockets is not written lazily. NASA's coding guidelines are very clear. If everyone followed them, we'd all be working at about one-tenth the speed. What you're looking at is this moment that we're in, right, where we have networks and we have new ideas permeating through the networks, and the ability to scale and communicate something or get people to use a new piece of software.
        </p>
        <p>
          So I'll give you an example. The web was a document delivery platform. Now it's a software delivery platform. People like to send software through the internet—mostly in the form of executable JavaScript. The cost roughly approaches free, and the work to do it, you know, could be three months, and you could have a huge hit product on your hands, and it could be seen by anywhere between a million and a couple billion people, depending on the kind of experience it is or something. To get to the billion is usually—you've become a much larger company, but nonetheless, it's vast amounts of human beings compared to the amount you used to be able to reach.
        </p>
        <p>
          Instagram is a good example. A relatively small number of human beings—thirteen, I think—were able to make something that had tens of millions of users very quickly, were bought by Facebook for a billion dollars, now have something like two or three hundred million users? And they were able to build it using the Django open-source framework using Python and commodity cloud servers. So the toolkit is there for people to be able to move very quickly.
        </p>
        <p>
          I mean, the thing with Instagram was that it was a fun way to share photos. No one was looking for a cultural point of view, especially because early days it wasn't all Kim Kardashian and beautiful Italian villas. It was way more low-key and happening and people actually were communicating. People who succeeded on the platform were still fairly indie and were showing their lives. And so it just explodes—we've created a roadway where it's very easy for stuff to fan out to millions of people, increasingly because of the economic power of the giant networks of Google, Facebook, Apple, etc. By the time anything hits a certain scale, they try to buy it.
        </p>
        <p>
          WhatsApp is a great example. I don't know if this was ever reported, but I had a friend of mine who was like, "Oh, yeah, clearly what happened was that Google kept bidding up WhatsApp because they wanted to make Facebook pay $19 billion. Facebook probably could have bought it for $6 billion, but because of the bidding war and the pressure and their sense of WhatsApp taking away their potential share of a market, they spent $19 billion." And so the independent entity that was growing, known as WhatsApp, doesn't exist anymore, it's just become a part of Facebook.
        </p>
        <p>
          And I think we're in this very weird zone where these enormous new entities are keeping very careful watch over the marketplace because they feel threatened by newcomers. Newcomers have the ability to achieve quick scale, but—Snapchat's a good example. It's expanding, expanding, expanding, to the point that Facebook has said, "Okay, we will now basically clone your product." No, right? And that's just straight-up capitalism. Like, "Okay, we see the scale you've reached, and you won't sell to us. Therefore, Instagram will now start to absorb more and more of your functionality, and we'll see what consumers think."
        </p>
        <p>
          And so the culture of blurters, right, if you think about building an Instagram, that's who you want. You want someone who's like, "I did it! I stayed up all last night and I got the new photo-sharing feature. It's all built." And you're like, "Whoa, we didn't even talk about this!" And they're like, "Yeah, but check it out!" And you're like, "Shit, okay, let's release it. Let's see what happens." And you've got GitHub, and you put it up, and it autodeploys to all these servers, and everybody goes, "Good job!"
        </p>
        <p>
          Only later do you realize that you have rebooted visual culture along the lines of little rectangular images with filters. And that it is favoring certain ways of looking at women and certain ways of looking at conspicuous consumption that have negative social impact. But that was one programmer who stayed up late. And three, four, years later, we're having conferences about the effects.
        </p>
        <p>
          But the reality, too, is that if that had been a motivated, do-gooder, super positive leftie, you know, intersectional theorist programmer, and they had stayed up late because they love this community growing, it might have had the exact same effect. So it's really easy to attribute ideology to those patterns, and it's just that once things scale and lots and lots of human beings get involved, the fundamental crappy parts of human culture sort of start to permeate back through. Twitter's a great example. You couldn't have a more annoying bunch of do-gooders trying to create Twitter, and then the platform they create ends up having enormous issues, to the point that it's one of the mode of engines of electing a terrible, racist president of the United States. That's a real thing Twitter did.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Do you think there are ways to design software in a way that discourages that, I guess? There was one piece that I think somebody who works here wrote, about building kind social networks.
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Sure. Oh, Kevin Barrett, yeah.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Yeah. And is that something that people can sort of preemptively, strategically build?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Yes, but it is often in direct opposition to tremendous growth in the marketplace. Which is two things, right? Because the demand isn't there in the same way that it is for the open broader networks. And the advertisers aren't as excited, so on. So you're deciding to hobble your growth by doing that. If you have a source of revenue or you have an active community that's willing to chip in, then you're fine. Then you can keep that growing for as long as you want. If you're trying to compete or grow in the larger systems, that just tends not to work.
        </p>
        <p>
          We're in a pickle. We're in a weird place. And the standards are now impossibly high. Everyone has decided that success now looks like a billion users and billions of dollars and private pools at every one of your properties. The person who makes $10 million is just garbage. You know, they didn't succeed, right? But if you are a person who has grown up in this culture and read Hacker News and really believes in it—I come from the world of the humanities, where just even making a salary is incredibly suspicious. You probably shouldn't do it, right? I mean, I'm sure, you're leaving a philosophy program to go back to Silicon Valley. There are some people who are like, "Hmmm, Jackie. I guess you weren't serious. Guess you didn't really want the golden dream of making $24,000 a year as an adjunct while somebody yells at you every day." Certain of your classmates are on that path.
        </p>
        <p>
          So, to me, I've always had a different set of success factors and have never had the desire to go out to Silicon Valley and make it big or try. And most people don't. Most startups don't succeed. So there's just all this kind of bad mythmaking, and the way that the network works really contributes to the negative patterns of human interaction that you see. At the same time, stuff like email still works really well. I'm not just saying that because you work at Nylas. Email is the great social network. It monetizes terribly—it just does, and it's expensive because of spam, and it doesn't have the right kind of protections built in—but in terms of transferring data and messages between human beings, it's just freaking unbeatable.
        </p>
        <p>
          But nobody owns it. It pairs really poorly with advertising. You get services like Gmail, which it kind of works with advertising, and you get the various $25 per user per year things, and you get stuff like Nylas. It's all really good, but you're carving out a piece of a global market rather than creating your own marketplace. And the VCs secretly want everyone to come to them and say, "Once we build this, we will have created a market."
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          So something you were talking about a little bit earlier was about how Facebook, for instance—or just all of the large companies—are becoming these sprawling entities. And one of your dumb questions for 2016 was about quantifying the global power outside of market cap.
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          I mean, Facebook is bigger than Spain, right? It's so big. When you talk to people from Facebook, they're very aware of this, but ultimately they see themselves as good actors who are trying to increase communication between people. And they've had insane scale thrust upon them and are doing the best they can. There's no real governance, right? There's no clear law about these new entities. As it gets imposed, they fight it viciously. Good example is Google versus—there's a concept in European law of the right to be forgotten. Do you know about this?
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          Like, people can petition to be not listed in search results?
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          Not erased. Let's say there was coverage of a lawsuit you were involved in ten years ago in a newspaper. You can petition—I guess roughly after a certain amount of time—you can petition to have the results for your name for those articles removed from Google search index. You're not erasing the historical record, you're not necessarily removing it from the newspaper search engine, but the first thing that someone types when they type in their name, if it was results from the article, will no longer show up.
        </p>
        <p>
          To my mind, that is a sensible compromise. I think that you will not get a job if the first thing that shows up in your Google search results is the lawsuit you were involved in fifteen years ago, the stupid thing you said, whatever. People have to be allowed some ability to move on from their past. I tend to think of it as a good thing.
        </p>
        <p>
          I had a direct experience of it when I was an editor at Harper's Magazine because I put the whole archive up, back to 1850, and suddenly people who had had something written about them in the mid 90s—this article would show up, that was about them and something paints them in a negative light. And as long as they didn't threaten a lawsuit, at which point I would have to take it to general counsel or I would have to take it to the general manager who would then call counsel because of our liability, I would basically put it into `robots.txt`. Ignore this page, Google, don't search it.
        </p>
        <p>
          So the historical record of Harper's was inviolable. That was important, and it was digital, and you could come and gain access to it. But I didn't feel any need that something that no one could search before—some guy was trying to get a job as a paralegal, and he felt I was blowing up his chances. I was like, "Yeah, of course. Let's just get that out of there, and hopefully in a week or two it'll be out of the archive." And I just felt that that was fair. You shouldn't have to have some paragraph mention of you follow you around. Now, someone who kills someone or does something really bad—that's a different story. But just a lot of the news is about bad divorces between normal people who are not public figures, and it's like, "Don't ruin their lives."
        </p>
        <p>
          So that's an example of litigation attempting to engage with the power of these platforms and ultimately succeeding. That right doesn't exist in the United States, but it does exist in Europe. But we do not have Congress that understands this world. We have a tremendous amount of lobbying effort now that is trying to keep stuff from changing. So I think that Facebook is going to attempt to remake the world in its own image because it's a giant force and that is in its best interest. Google, actually, in some ways, has. We just assume that search will work, and it functions as a free commodity, and it has an enormous amount of cultural power.
        </p>
        <p>
          We spent a hundred years trying to break up the Bell System and then finally did in the 80s, so maybe that conversation ends up happening, but the Bell System was like if Google and Facebook were one company. I think right now we're just going to be in the middle of it for twenty or thirty years. The giants are going to play, and they're going to fight, and there'll be new forces, and change will come when something exists that they can't acquire. But for right now we're just going to live in the world of search and social. Who knows? Things blow up in this industry every five or ten years. Facebook has an ungodly amount of power. And then Apple does, too. Actually, Microsoft still does—so these giants really are locked in. And they're thinking ten, twenty, years out at this point.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          That's a little bit—
        </p>
        
        <p className="speaker interviewee">
          Paul
        </p>
        
        <p>
          It is! I don't know whether I feel bad for people coming up—I had a sense of incredible social opportunity from the early days of the web, and anybody could connect to anybody, and it was global, which at that point felt insane. The fact that people from London or China or wherever were looking at web pages I made. It blew my mind. Because in my head, it was the equivalent of photocopying and mailing them out. That had been the low-cost distribution channel before, and so suddenly you had—the world was merging, and people were communicating in ways they hadn't before, and nobody was watching because it didn't have much social power. And so it was wonderful to ride that wave and see how that worked.
        </p>
        <p>
          That is not that this is anymore. This is now an entrenched part of culture with unbelievable power, related to political power, media power, economic power. And so the core is that anyone can publish a web page or anyone can send an email. That's still real. But the cultural immune system around it is now far more devolved. And so I think part of me is bummed that people who are coming up in this world, people in your cohort, don't get to  participate in that sense of play, but you're also not going to get it snatched away from you by $400 billion corporations who will consistently tell you that their platform is the only way to communicate. I don't know. I mean, it's nice to write something on Medium and know that I'll get a couple thousand people to read it, you know. I spent years writing things that ten people would read. And maybe I'm just nostalgic for when I was younger. But there is—that sense of exploration isn't quite the same.
        </p>
        
        <p className="speaker interviewer">
          Jackie
        </p>
        
        <p>
          So I have one last question. What's something you're thinking about lately or wondering related to—
        </p>
        
        <p className="speaker interviewer">
          Paul
        </p>
        
        <p>
          Sure, all this? The work I'm doing and the things I'm thinking, when I'm not running the business—there is a real bifurcation between consuming and making. And the cool thing about the early days of the internet, up through Geocities and all that stuff, were that you would make something and you would put it up and you would consume other people's content. And the endgame of that, I think, was Twitter, which was just you could really blurt something out, and it'll be distributed to the people in your following list and so on.
        </p>
        <p>
          But I feel that the opportunity of the web and of the internet in general, to me, was that it was a vast global notebook filled with other people's ideas, and it should be possible to do something with those ideas. They're abstract objects, they're pages, they're paragraphs, and so on. That was always the promise, which was that you could extract a paragraph and link it to another paragraph. That was the original hypertext vision—the whole document space was a kind of giant application, and you could build on top of it.
        </p>
        <p>
          So if I think about anything, I think about, "Is there a way for me as a writer to use the web as a giant notebook? Are there ways for me to look at web pages and see them and understand them in different ways from just reading the text? What are the inherent latent APIs that are all around me that I've stopped looking at because I've been given these experiences, like going to the NYTimes.com or Twitter?"
        </p>
        <p>
          It's so easy to consume. It didn't used to be that easy—you had to go looking for things. Part of that is wonderful. Part of that is you just can bathe in [content]—I can goof around on Twitter for an hour and know everything that's going on in the world, be in touch with a lot of friends, and make a bunch of stupid jokes, and then just go back to my life. So part of that is wonderful.
        </p>
        <p>
          But the other part of that is that—time on Twitter feels like time goofing off or making a point or ensuring that your tribal affiliations are solid. But it doesn't feel like time making. The tweets don't add up to a corpus. I miss that. If you look back a month ago or two months ago, my tweets would be roughly the same as the tweets I'm posting now. There wouldn't be this tremendous sense of growth. When I was writing every day or blogging or doing weird code stuff, I could point back to months before when I had just not known something and now I knew something new and I created something new. And I don't feel that the platforms that we have today encourage people to create at that level. They don't make us into new people.
        </p>
        <p>
          One thing about getting older is that I used to have a fantasy that that was what people wanted. It's not. Most people don't want that. The vast majority want to catch up on their friends, share a recipe, live their lives, watch TV. And they don't have the time and mental energy to get big new experiences all the time. They're not seeking it. But there's a portion who do, and I think that they're underserved. More people could be making more stuff, but the platforms don't encourage it.
        </p>
        <p>
          So what I'm thinking, what I'm working on, what I'm trying to solve, what are some patterns whereby we can get people back into making things? But also I think it needs to be semi-non-commercial. I think that companies and startups that try to do that because the demand—counting on humans to make stuff for you is very risky, and trying to build a business on that is very risky. So for me, anything I come up with along these lines probably will be something I can use to write with, and that will validate that—at least then I'll be using my own tool. We'll see what I come up with.
        </p>
      </div>
    )
  }
}
