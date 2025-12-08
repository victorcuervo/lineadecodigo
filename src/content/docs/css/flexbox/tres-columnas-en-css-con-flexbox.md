---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXUFOKX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD963Iy8NmvJiaBOFatDAVhFGtpwXoloyp9gf91OiEnzAIhAMbhQR93suqzuvprXA%2Br%2BIiWN5DADJJGs1wOg6%2B6Yk5QKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF2PkEcZ73Q69f4goq3APnyz2XqZdQRl389CgKGB4elaFS5nKWosfroeQ9yXL2bOIU8klsuQrCC6hDYYCYN9j3C%2F%2BKzeiyJk6ahJo2Y9vsVAJpMp3wpgWNdlkH86nSED1ssC%2BUSTg7fiGsxipb4OMvF0HeDworOiCYVJCFe21aNgpcXSeVrpyba%2BaXUb7eYpxid954ppkn1WnFN8bjDUXPBKOa9%2BTWaA9w3VwFoRBG%2FXyJ6aP1LVGKJAvT4E68cMelA3shVgqebUbXVSB932DO%2FlMNNTTXKH%2F22abZe1xHQLHtNelqNyqfV3TZip1q6wncbyYb9ok5Srq2wTu5SjQzUAKlr5JKYM86HhfhXOqmTJ%2FyScg0RWVd9czbixWZN4cjh615wEzbOfC%2BAuyFOw3BlwrpDQ%2B4IUBAuMGtsNUAZCAv%2FsooF3d%2B40koUBrWd9UkPokJSU63zlyktBFoc4iHhvOAoRicv6KSE3PfXakD9oRUL65YSrjXG4ti25cncq7MpK7OQ0r1wR2v3UYacNfynq%2FUtJ2XZSvlKx001ofeDoypBTT0jN44rs%2FKpl28%2BVMVWSnzAyYX%2B7P0FZjN%2Fcqc3BHedK9CDsmuF%2BvIIfW%2Boyevvobj5FYTrVV2t1uZOSi%2F5zEJ9KKBTgfgvTCgtNzJBjqkAcdPdLamXsko9XsyndYeFnTQcwvdZi%2FYbxDQ1XfK3KDaLbdbFVkj%2F5qMRnWas02EDynSPRsw1ryqHta9Fmjov%2Fn2wV%2Fj%2B1uWLXTB9grE%2BlRL%2BxJqAZp0Swcucze%2FazcNuL4b2XINheoNOUlu9Ar39fcZ4sCyJTkqYNtxza9FrgM24L5hPnbaxHu9lLFH9awqz2LD7TDlVGAhRAh%2Faogx%2FdSvFDoF&X-Amz-Signature=8502cbb0aea8e696dbf33b7f5a0ff98fd0b3de11046e3c0077a4aa55af78dc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXUFOKX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD963Iy8NmvJiaBOFatDAVhFGtpwXoloyp9gf91OiEnzAIhAMbhQR93suqzuvprXA%2Br%2BIiWN5DADJJGs1wOg6%2B6Yk5QKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF2PkEcZ73Q69f4goq3APnyz2XqZdQRl389CgKGB4elaFS5nKWosfroeQ9yXL2bOIU8klsuQrCC6hDYYCYN9j3C%2F%2BKzeiyJk6ahJo2Y9vsVAJpMp3wpgWNdlkH86nSED1ssC%2BUSTg7fiGsxipb4OMvF0HeDworOiCYVJCFe21aNgpcXSeVrpyba%2BaXUb7eYpxid954ppkn1WnFN8bjDUXPBKOa9%2BTWaA9w3VwFoRBG%2FXyJ6aP1LVGKJAvT4E68cMelA3shVgqebUbXVSB932DO%2FlMNNTTXKH%2F22abZe1xHQLHtNelqNyqfV3TZip1q6wncbyYb9ok5Srq2wTu5SjQzUAKlr5JKYM86HhfhXOqmTJ%2FyScg0RWVd9czbixWZN4cjh615wEzbOfC%2BAuyFOw3BlwrpDQ%2B4IUBAuMGtsNUAZCAv%2FsooF3d%2B40koUBrWd9UkPokJSU63zlyktBFoc4iHhvOAoRicv6KSE3PfXakD9oRUL65YSrjXG4ti25cncq7MpK7OQ0r1wR2v3UYacNfynq%2FUtJ2XZSvlKx001ofeDoypBTT0jN44rs%2FKpl28%2BVMVWSnzAyYX%2B7P0FZjN%2Fcqc3BHedK9CDsmuF%2BvIIfW%2Boyevvobj5FYTrVV2t1uZOSi%2F5zEJ9KKBTgfgvTCgtNzJBjqkAcdPdLamXsko9XsyndYeFnTQcwvdZi%2FYbxDQ1XfK3KDaLbdbFVkj%2F5qMRnWas02EDynSPRsw1ryqHta9Fmjov%2Fn2wV%2Fj%2B1uWLXTB9grE%2BlRL%2BxJqAZp0Swcucze%2FazcNuL4b2XINheoNOUlu9Ar39fcZ4sCyJTkqYNtxza9FrgM24L5hPnbaxHu9lLFH9awqz2LD7TDlVGAhRAh%2Faogx%2FdSvFDoF&X-Amz-Signature=7161f628bd54407254b32279b5401a43e73e3189eb258ae6d4b08efd04c13a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

