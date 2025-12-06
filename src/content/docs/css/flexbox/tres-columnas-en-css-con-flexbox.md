---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFXKF5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKIdlJR1vpqQH%2Bz5oSdknMN%2BMoShvn3sp5HX0xKSt1GAiAuJ3QLotuL5a%2BsqJc%2Fo0UP1FCEqIuKax1cm%2B8S2EVBnir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMcuLIFg0niRn0NT0dKtwDat2zI65VxWdpYuon4bhz6U5rLsaK6HlHJ3cXNUB2DrHVScf%2FFY%2BcUKP5swRZjE8QhTClOtoGFjRYd9uckwPYOTvqX8TZN%2BGehwJqpvT3%2BN1RQmlJyj2205DS%2BGfMLXpUofIHTjM2bqS9dkeTmH%2BUGWYjLsLL9O8ijfXpVrVexMHo08t1SnznbqMC0ChDCZO0w4jdBKys92iDHmIQtKCu9I4X4fDPSMoKcCgy9eacOF5V6YYeFkt5YNUNVL%2B6ArcwCScm%2Bvej2CGEEpMvXDOhnF9T7thchAqUlBla2FiLMNUhuvu7pSliwzCn3Cv3SfZDtaV4NJBDlt8VGuE8zWCkLOpTsFH67n15OqZbZ0CgeCdg6Hr9LlB7kdLCT2tTCNerJ%2FLs%2BTiCkVk3aLtfxM7%2BLGwZ02kk1N1LRwojt99L70MTaSkcbk7EGVelcvn%2Bj9x9aIAA5ih7VLVFRJWPYk%2BS9X0uvyHcC%2ByQl%2Fyf6UxRbGMDJ2f%2BlfiDuALFuc%2FkKywkBwM2G4Kbkgnc70xmrnNJXr3QyWFeMdaA4Qn%2BsH6BMYYS33Lojgczvw6XwwazC4aybSh2EvJgEKUTaGKIuKoowYhTuhhUTP%2BcUIsuqkouz5RuRdFfpHDvDRiEOOMw6qbQyQY6pgGeiNwyG5sT2rkYzk7L1n6ioOJPp5STIE0PcL4vVAs5%2FjDuYUgWY4LUPsaKi8aNIr3TseLlwTRrynxZX1SjV%2Bz%2BXRurc4GnmW1mTPt1xzPcWZXbgOVuIRPysH2XjMW9Q0MTHyXlZ6bpmgxHK8HrEJTIOIJcM5FFhe4IBgAfH66Q4vsEQGiD2APOqIZPL23ffbBacSTLfb951pHl%2BgqXuhmjEn74Mh5o&X-Amz-Signature=0e1fcc6c1f45f733a1c13753d228f3affcf27c4c31b7cf5eaa09bc52c3f05207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFXKF5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKIdlJR1vpqQH%2Bz5oSdknMN%2BMoShvn3sp5HX0xKSt1GAiAuJ3QLotuL5a%2BsqJc%2Fo0UP1FCEqIuKax1cm%2B8S2EVBnir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMcuLIFg0niRn0NT0dKtwDat2zI65VxWdpYuon4bhz6U5rLsaK6HlHJ3cXNUB2DrHVScf%2FFY%2BcUKP5swRZjE8QhTClOtoGFjRYd9uckwPYOTvqX8TZN%2BGehwJqpvT3%2BN1RQmlJyj2205DS%2BGfMLXpUofIHTjM2bqS9dkeTmH%2BUGWYjLsLL9O8ijfXpVrVexMHo08t1SnznbqMC0ChDCZO0w4jdBKys92iDHmIQtKCu9I4X4fDPSMoKcCgy9eacOF5V6YYeFkt5YNUNVL%2B6ArcwCScm%2Bvej2CGEEpMvXDOhnF9T7thchAqUlBla2FiLMNUhuvu7pSliwzCn3Cv3SfZDtaV4NJBDlt8VGuE8zWCkLOpTsFH67n15OqZbZ0CgeCdg6Hr9LlB7kdLCT2tTCNerJ%2FLs%2BTiCkVk3aLtfxM7%2BLGwZ02kk1N1LRwojt99L70MTaSkcbk7EGVelcvn%2Bj9x9aIAA5ih7VLVFRJWPYk%2BS9X0uvyHcC%2ByQl%2Fyf6UxRbGMDJ2f%2BlfiDuALFuc%2FkKywkBwM2G4Kbkgnc70xmrnNJXr3QyWFeMdaA4Qn%2BsH6BMYYS33Lojgczvw6XwwazC4aybSh2EvJgEKUTaGKIuKoowYhTuhhUTP%2BcUIsuqkouz5RuRdFfpHDvDRiEOOMw6qbQyQY6pgGeiNwyG5sT2rkYzk7L1n6ioOJPp5STIE0PcL4vVAs5%2FjDuYUgWY4LUPsaKi8aNIr3TseLlwTRrynxZX1SjV%2Bz%2BXRurc4GnmW1mTPt1xzPcWZXbgOVuIRPysH2XjMW9Q0MTHyXlZ6bpmgxHK8HrEJTIOIJcM5FFhe4IBgAfH66Q4vsEQGiD2APOqIZPL23ffbBacSTLfb951pHl%2BgqXuhmjEn74Mh5o&X-Amz-Signature=29e8a2ab21b291e11ca085dcc3989ce9dbe00dc9d6bba0010558c081c87ef391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

