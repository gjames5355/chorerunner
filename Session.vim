let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~\thinkfulprojects\ChoreRunner-Client
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 ~\thinkfulprojects\ChoreRunner-API\src\households\households-router.js
badd +0 term://.//24484:C:\Windows\system32\cmd.exe
badd +0 term://.//20020:C:\Windows\system32\cmd.exe
argglobal
%argdel
set stal=2
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 21 + 21) / 42)
exe 'vert 1resize ' . ((&columns * 84 + 85) / 170)
exe '2resize ' . ((&lines * 21 + 21) / 42)
exe 'vert 2resize ' . ((&columns * 85 + 85) / 170)
exe '3resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 3resize ' . ((&columns * 85 + 85) / 170)
exe '4resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 4resize ' . ((&columns * 84 + 85) / 170)
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
if bufexists("term://.//24484:C:\Windows\system32\cmd.exe") | buffer term://.//24484:C:\Windows\system32\cmd.exe | else | edit term://.//24484:C:\Windows\system32\cmd.exe | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 43 - ((19 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
43
normal! 0
wincmd w
exe '1resize ' . ((&lines * 21 + 21) / 42)
exe 'vert 1resize ' . ((&columns * 84 + 85) / 170)
exe '2resize ' . ((&lines * 21 + 21) / 42)
exe 'vert 2resize ' . ((&columns * 85 + 85) / 170)
exe '3resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 3resize ' . ((&columns * 85 + 85) / 170)
exe '4resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 4resize ' . ((&columns * 84 + 85) / 170)
tabedit ~\thinkfulprojects\ChoreRunner-API\src\households\households-router.js
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 1resize ' . ((&columns * 94 + 85) / 170)
exe '2resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 2resize ' . ((&columns * 75 + 85) / 170)
exe '3resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 3resize ' . ((&columns * 85 + 85) / 170)
exe '4resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 4resize ' . ((&columns * 84 + 85) / 170)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
enew
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
if bufexists("term://.//20020:C:\Windows\system32\cmd.exe") | buffer term://.//20020:C:\Windows\system32\cmd.exe | else | edit term://.//20020:C:\Windows\system32\cmd.exe | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 45 - ((13 * winheight(0) + 9) / 19)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
45
normal! 07|
wincmd w
3wincmd w
exe '1resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 1resize ' . ((&columns * 94 + 85) / 170)
exe '2resize ' . ((&lines * 20 + 21) / 42)
exe 'vert 2resize ' . ((&columns * 75 + 85) / 170)
exe '3resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 3resize ' . ((&columns * 85 + 85) / 170)
exe '4resize ' . ((&lines * 19 + 21) / 42)
exe 'vert 4resize ' . ((&columns * 84 + 85) / 170)
tabnext 2
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=I
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
