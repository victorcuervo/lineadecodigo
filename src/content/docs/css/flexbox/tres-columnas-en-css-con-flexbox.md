---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZ6LBTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ3hcf4t8TrbU8JkUrmUFVccjJaiJ5tuhSXtxGQMh0%2BAiEA0XqrEONELXwO2Ve0ZJVIR34rT1lEoGZ7cynEd6bclEgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF2gWSGJXLHbRfdviCrcA0xIAfxA9BLfOiuYwMFrtGM2E%2BD2MMKhHTU0cL0cGRhWlmpTv7qCV8Ikx6ml84dEhgkPwbim96ApiMRBKrqbUexqAgn%2BTfH1ousBBZLVUJv03XbFbyTPoDoHkA5r8qb%2FL2sxqd9zBn8zTMW4gVqng3o5dhRrlpa5%2F1qDZvUuFVr5tglcHs6Wh3Q52cJq9HU4aPYz4FMu22BmpQZfCe%2FOeUqi%2F0LWri1trjFQ5heFRcICHBMSiaQrv0S5ckXeZjOmHEViYLHg0M8gBhxu76Nt%2FLjF36uz3R0Fb971TQvLXJSSHv0VTkUlHkk6obS7EHPJ6V%2BbMHUlAuzWzkoepK48BdeHEQJrkve3tgxYTRj6pH61YEjoD2BarF0fTGmT%2BUbJhcO4vbRHyhezE%2Fn%2BkaCXyczGXir4y72cqyoVyO7%2Fm2pAkwGhOnr1PV57Kiev87OVLfDoZtqsQuiJLvVjJl%2Ftnzvq5mC8RR%2BgYSioy8ksUVQ%2FAlV7XWfM%2F5ba3WN41eEZJrstOBE4rN%2FnxXCWrVsaYA7VLzil95FxCP0N9qZJqt0vDORvoMaoh7DUKsbiUQHCitiPCM1QoONbC3XGqLkcuX%2FkgFD%2F%2FSEyevEm%2FJvxr6ZqbGMb1Gs7pbVlu173MJjqy8kGOqUBDUZFsEoTdBhlavtyvuGmBpT6JoRFnG4nLmI6uNORprPhKtIQ38NAw95k%2B7m7jfYsZNQNnSuTITdGv9y%2FNbpSCa2QJkcmfEE7WlcfrOyxuTPxEEX71jHoQvGv3Zy8t1Hx9ZwPRPACnryY%2Bg6k8sF6y4r983%2FFkIlzVJ1jbvr7BN%2FZZcTI2p5c%2Bnq9Tp2AWzdb5ZoipIF6r2VjjQiimglSS2NeH2wh&X-Amz-Signature=db5686479697fcbad358079e5831cef8829954fdb27676fb6ac8f56dbe92ad65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZ6LBTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ3hcf4t8TrbU8JkUrmUFVccjJaiJ5tuhSXtxGQMh0%2BAiEA0XqrEONELXwO2Ve0ZJVIR34rT1lEoGZ7cynEd6bclEgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDF2gWSGJXLHbRfdviCrcA0xIAfxA9BLfOiuYwMFrtGM2E%2BD2MMKhHTU0cL0cGRhWlmpTv7qCV8Ikx6ml84dEhgkPwbim96ApiMRBKrqbUexqAgn%2BTfH1ousBBZLVUJv03XbFbyTPoDoHkA5r8qb%2FL2sxqd9zBn8zTMW4gVqng3o5dhRrlpa5%2F1qDZvUuFVr5tglcHs6Wh3Q52cJq9HU4aPYz4FMu22BmpQZfCe%2FOeUqi%2F0LWri1trjFQ5heFRcICHBMSiaQrv0S5ckXeZjOmHEViYLHg0M8gBhxu76Nt%2FLjF36uz3R0Fb971TQvLXJSSHv0VTkUlHkk6obS7EHPJ6V%2BbMHUlAuzWzkoepK48BdeHEQJrkve3tgxYTRj6pH61YEjoD2BarF0fTGmT%2BUbJhcO4vbRHyhezE%2Fn%2BkaCXyczGXir4y72cqyoVyO7%2Fm2pAkwGhOnr1PV57Kiev87OVLfDoZtqsQuiJLvVjJl%2Ftnzvq5mC8RR%2BgYSioy8ksUVQ%2FAlV7XWfM%2F5ba3WN41eEZJrstOBE4rN%2FnxXCWrVsaYA7VLzil95FxCP0N9qZJqt0vDORvoMaoh7DUKsbiUQHCitiPCM1QoONbC3XGqLkcuX%2FkgFD%2F%2FSEyevEm%2FJvxr6ZqbGMb1Gs7pbVlu173MJjqy8kGOqUBDUZFsEoTdBhlavtyvuGmBpT6JoRFnG4nLmI6uNORprPhKtIQ38NAw95k%2B7m7jfYsZNQNnSuTITdGv9y%2FNbpSCa2QJkcmfEE7WlcfrOyxuTPxEEX71jHoQvGv3Zy8t1Hx9ZwPRPACnryY%2Bg6k8sF6y4r983%2FFkIlzVJ1jbvr7BN%2FZZcTI2p5c%2Bnq9Tp2AWzdb5ZoipIF6r2VjjQiimglSS2NeH2wh&X-Amz-Signature=dbc4e10a3cac6c9f12a236857fcfbe057bbf239fb6e119abcc9b152a03f3b14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

