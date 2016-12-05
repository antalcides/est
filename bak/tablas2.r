library(agricolae)
c( 68, 53, 69.5, 55, 71, 63, 76.5, 65.5, 69, 75, 76, 57, 70.5, 71.5,
   56, 81.5, 69, 59, 67.5, 61, 68, 59.5, 56.5, 73, 61, 72.5, 71.5,
   59.5, 74.5, 63) -> peso
h6<- graph.freq(peso, axes=FALSE, nclass=5, main="frecuencia con 5
clases\nh6")
axis(1,h6$breaks,las=2)
axis(2,seq(0,10))
h10<-plot(h6, axes=FALSE, main="frecuencia con 5 clases\nh10")
axis(1,h6$breaks,las=2)
axis(2,seq(0,10))
normal.freq(h6,col="red")
summary(h6)