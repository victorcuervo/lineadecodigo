---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHTKORW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDWhC7hshPUGv12DazqxU09Hp%2BQo4BcurSm7sALUVr9sQIgE6Hd0a%2B8PjYQ0z6pYFwY%2BGo5s7Zg%2F2wm%2FIQschM63I4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHcxFX5OhZK9hubFNCrcAz7J2WFVCD%2FTq5d5mFzWvIhdT9wZLryG9jwl0jN0h1dF6SdwQW0wzKcEeTV95qib3S0lOntot9Uw8s1uKE%2BT9TPcDXiqLVo4M4V68RqVXY2HwWm5Bu59Jz7Z6%2FvnSFAVfBHB6SJ6VVDRxXNF3no%2BRljrR9TS7hXqsXubzbuoZEq7IAmu%2FmtKxRasdP6IDxGBkt1eGdqtf4AUYPBJ9aA1RnP0AJNdJ8%2BaG2T0%2FglF16lOzm%2Bh%2Fx%2FQrQKJAV6iWKT90D0oRbB6OoP%2Bf%2Bnuo4OKWUnSumsvX9pI6d6%2FUoinG0xiYprPt8rlcEcfMLmAp%2F1RqWU3UaCsROR48GUXgsIbcf3j%2BUMf2i3OQCeL8oPd7UL29ea4WgaoktAr0bjmsJDqjzzEbnaK%2B%2Fu%2BY6FH2fUYhF94kRroL2CXNWzPdjWL6KvHtKBm5hBkrZTZ2YWQ57tJ1iOcSk5jcbqqDlcdmo3dwRshmsDXTwDONxTJHMbWNInh%2BR5PUBDYgLFauvC6GRr5cmA8YO6eE4M4u7WlNouMljXqHZAvkgHf0P4uWhILU9KvKwW0ruvyDG7wnsC7LNL3Lbrapt7NeMxjv0lZu7wRoSjvGK6sBMzXqFi8Epg81s0VklcPszZ5Y4RL8wfhMMCuxMkGOqUBsrqoxypb%2BKveFthM2NZoHKY1bYwnBruvW1x%2FTSPORiJ%2BdNTa6en3raWpvG4dXJWrUQ2A9x1vMdzzuIkR4reoxh0fBnpHnEbvcKVZ9kY%2Fm0EZX2yq4xhBkWxMFKxRmZ98nNv8R6VDx5H3uxs1K1J0DwHWv3CX9GQTfec%2FxMmrsHYuUVg25x4UaCYmOf4TOlZPnaU3zWPEPsrm3JcRBt%2BlUiIJqzqq&X-Amz-Signature=2af4ebb2370e27e5a7083b87943b10cea7fcbb443ff70ca5513b1ba3c94f91d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHTKORW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDWhC7hshPUGv12DazqxU09Hp%2BQo4BcurSm7sALUVr9sQIgE6Hd0a%2B8PjYQ0z6pYFwY%2BGo5s7Zg%2F2wm%2FIQschM63I4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHcxFX5OhZK9hubFNCrcAz7J2WFVCD%2FTq5d5mFzWvIhdT9wZLryG9jwl0jN0h1dF6SdwQW0wzKcEeTV95qib3S0lOntot9Uw8s1uKE%2BT9TPcDXiqLVo4M4V68RqVXY2HwWm5Bu59Jz7Z6%2FvnSFAVfBHB6SJ6VVDRxXNF3no%2BRljrR9TS7hXqsXubzbuoZEq7IAmu%2FmtKxRasdP6IDxGBkt1eGdqtf4AUYPBJ9aA1RnP0AJNdJ8%2BaG2T0%2FglF16lOzm%2Bh%2Fx%2FQrQKJAV6iWKT90D0oRbB6OoP%2Bf%2Bnuo4OKWUnSumsvX9pI6d6%2FUoinG0xiYprPt8rlcEcfMLmAp%2F1RqWU3UaCsROR48GUXgsIbcf3j%2BUMf2i3OQCeL8oPd7UL29ea4WgaoktAr0bjmsJDqjzzEbnaK%2B%2Fu%2BY6FH2fUYhF94kRroL2CXNWzPdjWL6KvHtKBm5hBkrZTZ2YWQ57tJ1iOcSk5jcbqqDlcdmo3dwRshmsDXTwDONxTJHMbWNInh%2BR5PUBDYgLFauvC6GRr5cmA8YO6eE4M4u7WlNouMljXqHZAvkgHf0P4uWhILU9KvKwW0ruvyDG7wnsC7LNL3Lbrapt7NeMxjv0lZu7wRoSjvGK6sBMzXqFi8Epg81s0VklcPszZ5Y4RL8wfhMMCuxMkGOqUBsrqoxypb%2BKveFthM2NZoHKY1bYwnBruvW1x%2FTSPORiJ%2BdNTa6en3raWpvG4dXJWrUQ2A9x1vMdzzuIkR4reoxh0fBnpHnEbvcKVZ9kY%2Fm0EZX2yq4xhBkWxMFKxRmZ98nNv8R6VDx5H3uxs1K1J0DwHWv3CX9GQTfec%2FxMmrsHYuUVg25x4UaCYmOf4TOlZPnaU3zWPEPsrm3JcRBt%2BlUiIJqzqq&X-Amz-Signature=9a7341f031532e4ece87aa24a956abb5be4cbc6728e502068cf3d60ef2b5b32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

