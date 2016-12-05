# Author : Lars Gullik Bjønnes <larsbj@lyx.org>

# This include file contains all the counters that are defined as standard
# in most LyX layouts.


Format 49
Counter part
	LabelString          "\Roman{part}"
	PrettyFormat         "Parte \Roman{part}"
End

Counter chapter
	PrettyFormat         "Capítulo ##"
End

Counter section
	Within               chapter
	PrettyFormat         "Sección ##"
End

Counter subsection
	Within               section
	PrettyFormat         "Sección ##"
End

Counter subsubsection
	Within               subsection
	PrettyFormat         "Sección ##"
End

Counter paragraph
	Within               subsubsection
	PrettyFormat         "Páragrafo ##"
End

Counter subparagraph
	Within               paragraph
	PrettyFormat         "Páragrafo ##"
End

Counter enumi
	LabelString          "\arabic{enumi}."
End

Counter enumii
	Within               enumi
	LabelString          "(\alph{enumii})"
End

Counter enumiii
	Within               enumii
	LabelString          "\roman{enumiii}."
End

Counter enumiv
	Within               enumiii
	LabelString          "\Alph{enumiv}."
End

Counter bibitem
End

Counter listing
End

Counter equation
	PrettyFormat         "Ecuación##"
End

Counter footnote
	PrettyFormat         "Footnote ##"
End

Counter thanks
	PrettyFormat         "Footnote ##"
	LabelString	     "\fnsymbol{thanks}"
End
