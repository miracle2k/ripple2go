This is part of my ongoing attempt to make it easier to run the
various parts of the Ripple intrastructure for yourself.

This is a compiled version of the Ripple
[reference client](https://github.com/ripple/ripple-client)
which runs on Github pages. You'll just have to fork the
repository, and you're running your own copy. Edit `config.json`
to your heart's desire.

You can find your client at: http://github.io/username/ripple2go

Unfortunately, Github pages does not support SSL. Since the
Ripple client doesn't send your login data around unencrypted,
this isn't as large of a problem as it otherwise would be, but
it still makes it easier for an attacker to present you with 
a modified client when opening your url.

You can also deploy this for free on 5apps.com, which *does*
support SSL, and will also build Chrome and Firefox apps. See
an example here:

https://5apps.com/miracle2k/ripple2go
