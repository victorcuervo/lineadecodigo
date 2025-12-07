---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY2FNBW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS3yui%2FEtQawppi0O%2B%2BMWLRAD5T5nJitDqf5GY%2FpyAEAiAL5Gz92em%2FYBxXqDCS%2BgC31vEgPRweCwTKO3xS2gNogiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjznPRhJd0Fu6WD6SKtwDxrJWVk0nyG0XXjjdq71h0YPyQFP%2Fr26x2%2FmlBudGngBYoI2GmzXIYr3JvvNvsRO1JdvrkEBb5uaqyqA0AzHIoqKPlX9T%2BtPANTO5O%2BmUshuzkKzVWFmz9lS7lKVxclcnGIyrg5JBk6NVIuLSwhUh36IxJooq3pF1vlopQDH996KZj%2BQykG9pZ9%2F5M5p3GFLCXlASYH8FT8uT3aexA%2BG7BHXdXFMlJM%2BnykN%2BqBN%2B0lbmInNocJkQi5VeOBO6zm0b0TPsNgZ7bGjdUDO4W%2FDpD2gK%2FNXmDdhiV232vgtylYbVS%2B6XFEKqwXmvOcGBXERXZDVWVfo1iEskn87bFSNmfiXmOOpTyQAjvjcQ3CCvu%2BwDZHM6uu2W6zV8CXoc2bssiV9WPOpMynzNxBRty69JFfeAPLOgR0CW8BRy1f5%2B4d9tyNEmSaEfYKSZAJpzCqfGUzRP11QaowDVgEpTbEfKO%2BQRCMO1%2BqsUYWk1chdlTpdVznmsN%2FV8OeX3xQ67NhM9MEme%2BV59QVYDriDhPVE5I0eThi2GgDciGxYidUuk8pmLn%2FeUq9Tta2Nz9sOQ0MuZLb0EyWezV1A5PT590Nb4gr%2FYXtLEdApgONX5X4QZOKybSAxVT1JnlzvWmhIwk5rVyQY6pgEnM23TvD6iMezDyxtuzBfyVDEQ7BXMHkKhLwDYeabd8YIV7u2%2B8tNlx8YEMYUCkacuXiE5nb5k8W9N6kSQ5NLWU4kQETPsENbmvNcT%2BhNwPv8RKXA6vr1s0ZANRs9WnPxI7sDKKXfxEHmAm4%2BSDOmSjPCtS32h2%2FONPQSip%2FQiYIApu0sgUmAG95DgeVW9juXORV%2FwYAUJLEVjZxc6yqJ2KBb4Lpip&X-Amz-Signature=16ea2849f575ec35d02e1bf748eabfdb9e791119ab02ede0bd9bc0c2cfab97d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGY2FNBW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS3yui%2FEtQawppi0O%2B%2BMWLRAD5T5nJitDqf5GY%2FpyAEAiAL5Gz92em%2FYBxXqDCS%2BgC31vEgPRweCwTKO3xS2gNogiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjznPRhJd0Fu6WD6SKtwDxrJWVk0nyG0XXjjdq71h0YPyQFP%2Fr26x2%2FmlBudGngBYoI2GmzXIYr3JvvNvsRO1JdvrkEBb5uaqyqA0AzHIoqKPlX9T%2BtPANTO5O%2BmUshuzkKzVWFmz9lS7lKVxclcnGIyrg5JBk6NVIuLSwhUh36IxJooq3pF1vlopQDH996KZj%2BQykG9pZ9%2F5M5p3GFLCXlASYH8FT8uT3aexA%2BG7BHXdXFMlJM%2BnykN%2BqBN%2B0lbmInNocJkQi5VeOBO6zm0b0TPsNgZ7bGjdUDO4W%2FDpD2gK%2FNXmDdhiV232vgtylYbVS%2B6XFEKqwXmvOcGBXERXZDVWVfo1iEskn87bFSNmfiXmOOpTyQAjvjcQ3CCvu%2BwDZHM6uu2W6zV8CXoc2bssiV9WPOpMynzNxBRty69JFfeAPLOgR0CW8BRy1f5%2B4d9tyNEmSaEfYKSZAJpzCqfGUzRP11QaowDVgEpTbEfKO%2BQRCMO1%2BqsUYWk1chdlTpdVznmsN%2FV8OeX3xQ67NhM9MEme%2BV59QVYDriDhPVE5I0eThi2GgDciGxYidUuk8pmLn%2FeUq9Tta2Nz9sOQ0MuZLb0EyWezV1A5PT590Nb4gr%2FYXtLEdApgONX5X4QZOKybSAxVT1JnlzvWmhIwk5rVyQY6pgEnM23TvD6iMezDyxtuzBfyVDEQ7BXMHkKhLwDYeabd8YIV7u2%2B8tNlx8YEMYUCkacuXiE5nb5k8W9N6kSQ5NLWU4kQETPsENbmvNcT%2BhNwPv8RKXA6vr1s0ZANRs9WnPxI7sDKKXfxEHmAm4%2BSDOmSjPCtS32h2%2FONPQSip%2FQiYIApu0sgUmAG95DgeVW9juXORV%2FwYAUJLEVjZxc6yqJ2KBb4Lpip&X-Amz-Signature=7ab9abf1ad5bd3a04f8323665b789a6bc518cc676a06774f7e8fdf7066d7a41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

