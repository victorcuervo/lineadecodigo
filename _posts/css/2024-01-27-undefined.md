---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5JVAMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICrhIqjLCtiJQyUEp4yk%2BteFspK702t3F3oquPRkPhJPAiB%2BfsJQK7IclDdpsW2T6ZtfME%2Bjatv%2B0PmAwLI4DeUlYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMUWdnHr7UQSGKCZqxKtwDDtkolP2t0QhaH3cY6MR1kuPh1sKgv8ZXQ0MS%2B8tD%2FE0JNVA1E1Xla9IOHFD1c%2Bg15GsY%2BINX8%2Fb6yttDr4u%2BRrYrkeWBoNB4tm99vGzbf3eJIOepKf%2FmcgcgHVebty5HGr8I6iguEyiQe9pbuWMKYItRnsYyWPBJ0vkuzV0ySX8kS6gu7p4HXrLG0%2F8TYLiwXDInxsRGJCmMZv9kYl%2BVjyK73GyETZ62IaVtxiv2GrZH0VfOr0uMI%2BfBCg10w6MfrwgqY4gyd3JRJhsyMjJeXucr8k3VIfjuuUJ7vjuv8ViCGUmFq%2BzjaDSMN0AnAsGs591mFkubPrPoXXU8xJ3WxQHgzBnNh705USSCNM8wArwoa7HjB9AEsErs2ambXgU97FqFzeFNUs2RGLfnT7wQBX4hwt0YWPGvob41dsX2%2BZtp5g%2Be7K9Xf4xke7JSUyb7E%2FxY357h9WOqIyoba2LkjuNYgBd%2F%2F%2BuPGQDP4DN5YYPcWYFfmw%2FxveoQokL1RfJWQ1IZ9ZAWXUazfNhR5vIhmhv476AWlsfcEOtBZBLMNLG92er7%2FF%2F3PTV10IA92Qib%2FLusfB3972vKK9Rbrw%2Bt9%2BN68gHVEgRqUsDBSexMeH02WCHszuL16ULoAm8w7c3AyQY6pgGYJRFvmsHC2seWWFMPiioOKBaONbuBELVgAkJpokESfsA2QbWNKA9pbDu0uL%2FmgmPh7QuHVABQ6h5IfHGi0395FXmiSvebAdlvQZnbT47C6LMEHcgWUmcuYzz5fVL3Ojrm4DATb4zg9XMZ4YSUdCeBf7zpCEJKTTedGp01huOhqqq8Ltso5meI%2FaUnoQMr%2FokEbm14p9PWg0RcbMoJpe2bycyJDLg8&X-Amz-Signature=bf5f05ae2a5783b6ce15126394bcc273d69bcf7c5fcb39d7b4379de9b03d0d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5JVAMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICrhIqjLCtiJQyUEp4yk%2BteFspK702t3F3oquPRkPhJPAiB%2BfsJQK7IclDdpsW2T6ZtfME%2Bjatv%2B0PmAwLI4DeUlYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMUWdnHr7UQSGKCZqxKtwDDtkolP2t0QhaH3cY6MR1kuPh1sKgv8ZXQ0MS%2B8tD%2FE0JNVA1E1Xla9IOHFD1c%2Bg15GsY%2BINX8%2Fb6yttDr4u%2BRrYrkeWBoNB4tm99vGzbf3eJIOepKf%2FmcgcgHVebty5HGr8I6iguEyiQe9pbuWMKYItRnsYyWPBJ0vkuzV0ySX8kS6gu7p4HXrLG0%2F8TYLiwXDInxsRGJCmMZv9kYl%2BVjyK73GyETZ62IaVtxiv2GrZH0VfOr0uMI%2BfBCg10w6MfrwgqY4gyd3JRJhsyMjJeXucr8k3VIfjuuUJ7vjuv8ViCGUmFq%2BzjaDSMN0AnAsGs591mFkubPrPoXXU8xJ3WxQHgzBnNh705USSCNM8wArwoa7HjB9AEsErs2ambXgU97FqFzeFNUs2RGLfnT7wQBX4hwt0YWPGvob41dsX2%2BZtp5g%2Be7K9Xf4xke7JSUyb7E%2FxY357h9WOqIyoba2LkjuNYgBd%2F%2F%2BuPGQDP4DN5YYPcWYFfmw%2FxveoQokL1RfJWQ1IZ9ZAWXUazfNhR5vIhmhv476AWlsfcEOtBZBLMNLG92er7%2FF%2F3PTV10IA92Qib%2FLusfB3972vKK9Rbrw%2Bt9%2BN68gHVEgRqUsDBSexMeH02WCHszuL16ULoAm8w7c3AyQY6pgGYJRFvmsHC2seWWFMPiioOKBaONbuBELVgAkJpokESfsA2QbWNKA9pbDu0uL%2FmgmPh7QuHVABQ6h5IfHGi0395FXmiSvebAdlvQZnbT47C6LMEHcgWUmcuYzz5fVL3Ojrm4DATb4zg9XMZ4YSUdCeBf7zpCEJKTTedGp01huOhqqq8Ltso5meI%2FaUnoQMr%2FokEbm14p9PWg0RcbMoJpe2bycyJDLg8&X-Amz-Signature=8f85200f2b3c811951977a2f036c87288d3572997a3b57240c7fcbb6d5a998d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

