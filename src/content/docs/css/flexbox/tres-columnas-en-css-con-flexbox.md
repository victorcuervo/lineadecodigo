---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPAFAV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtt0COHX2i8e%2FfYkcmhCkFfpehP8bpGflOTr%2Fslnex1QIgKZc5VvUkGf2dN7V%2BJT1p1MuH8YayzYMVinJlookOKmAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx%2FcwxbYB4A908GtircA4FpFpKx4gGEe2IusKzZ3vs7dTAv02PRaCTTSopDsU1UYC2vzh9c5Z%2B0mmIAHGHlX2NfsSqjufvDhH3D1y1Q65UD8ToyzMaNw1a5pK4pRu5kkGCLvrBEy5Cqufu%2FfTMnq35j9Pn0AtoZwL59lmpIQUPaS7FejRLwcAS6%2BZAl51WcajErGNr3176RaL4GSuiinCGTM5sqY%2Fx7Bw7ATFj%2BAQlGR%2F2TulZlS%2BVW8G7A83NyQYoHvhZnqvmNkNq5Yyj2BnpI0aSgru7Gzms%2FOUEix6R0gWo44GYRwL5rFtVI5sbLl%2FvjqlrZWUFNe4GfMvXE%2F5ttRXy6qZ5paE0sH200qyquJm%2FZtsH2Z2p2n8SKIsPvk73Xw31G2Sy7DF7H9ierOZEVM1zCINZ%2BE6M7LPfhmhvfgXamJ9G2lx%2BGTowFLOYs%2FpDGcB5Uepo7FtkLkwGjk4AMdsINes%2Bh%2B6P6BnHOysQCr4Aqq5mKByHevH3fAV7ay%2Fo%2BUf9jJnYLXUBUQLlbI54APMUz80SURzU2Lb4VBV6eJcIQBObOM7%2F01H%2F7jh40I08HCZCa3DIuT1qYYB4ulAuV2dIBhe%2FaEDd8V5OhKkc80dt8a0lm1EestSRK%2FL8LbgtfJuqChk8O0avhMJLp3ckGOqUBTd7rnKxGY4a%2Bj%2Br%2FPbfN0IwTWcRuEywg6JxxgLyoLVWv8s3apFgWnr9Cz%2BVyKZH7qpydT1BV4Hvnv31%2BVsvHrmt%2FXhmvy%2BXUi%2BaxN1VaGe5l2uuBTyZrDLNGgmnd8lR9p%2BfU3cFrGK7wIHI4ABCLtGfK6qJPmeLWE0cVOKdRbfyaKG4RLSEvl%2B6T9un%2FXcL9mLlC1cmnLvP1fY3f3X1aEZSkmSLd&X-Amz-Signature=1d267798f03f582c47bed37bebf3846ba5ebc0dbf85ce2948e3a1cf1efd66a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAPAFAV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtt0COHX2i8e%2FfYkcmhCkFfpehP8bpGflOTr%2Fslnex1QIgKZc5VvUkGf2dN7V%2BJT1p1MuH8YayzYMVinJlookOKmAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx%2FcwxbYB4A908GtircA4FpFpKx4gGEe2IusKzZ3vs7dTAv02PRaCTTSopDsU1UYC2vzh9c5Z%2B0mmIAHGHlX2NfsSqjufvDhH3D1y1Q65UD8ToyzMaNw1a5pK4pRu5kkGCLvrBEy5Cqufu%2FfTMnq35j9Pn0AtoZwL59lmpIQUPaS7FejRLwcAS6%2BZAl51WcajErGNr3176RaL4GSuiinCGTM5sqY%2Fx7Bw7ATFj%2BAQlGR%2F2TulZlS%2BVW8G7A83NyQYoHvhZnqvmNkNq5Yyj2BnpI0aSgru7Gzms%2FOUEix6R0gWo44GYRwL5rFtVI5sbLl%2FvjqlrZWUFNe4GfMvXE%2F5ttRXy6qZ5paE0sH200qyquJm%2FZtsH2Z2p2n8SKIsPvk73Xw31G2Sy7DF7H9ierOZEVM1zCINZ%2BE6M7LPfhmhvfgXamJ9G2lx%2BGTowFLOYs%2FpDGcB5Uepo7FtkLkwGjk4AMdsINes%2Bh%2B6P6BnHOysQCr4Aqq5mKByHevH3fAV7ay%2Fo%2BUf9jJnYLXUBUQLlbI54APMUz80SURzU2Lb4VBV6eJcIQBObOM7%2F01H%2F7jh40I08HCZCa3DIuT1qYYB4ulAuV2dIBhe%2FaEDd8V5OhKkc80dt8a0lm1EestSRK%2FL8LbgtfJuqChk8O0avhMJLp3ckGOqUBTd7rnKxGY4a%2Bj%2Br%2FPbfN0IwTWcRuEywg6JxxgLyoLVWv8s3apFgWnr9Cz%2BVyKZH7qpydT1BV4Hvnv31%2BVsvHrmt%2FXhmvy%2BXUi%2BaxN1VaGe5l2uuBTyZrDLNGgmnd8lR9p%2BfU3cFrGK7wIHI4ABCLtGfK6qJPmeLWE0cVOKdRbfyaKG4RLSEvl%2B6T9un%2FXcL9mLlC1cmnLvP1fY3f3X1aEZSkmSLd&X-Amz-Signature=e0253542cce36d7c7a386dd283884e90e715a81ac5140d23ac53e4e17af36f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

