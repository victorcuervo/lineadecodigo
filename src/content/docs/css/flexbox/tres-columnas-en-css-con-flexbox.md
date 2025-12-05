---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CUPW6J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7Vch2gfY0Z%2BjCQeqjacBeejBQwzyPUZa8iTzYQ%2FCIfAiBk4DHH8GU0r2tr0AE9bKvib7CdSwh6HeIeLC%2B5k%2Be0Hyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMW6LMbNPQjWW0gXPtKtwDuDncfZOLuKx2AZy7vxa9MZsCvjLM%2FxVxka0NOV2VLllpQ2Jq1jz%2BDFxf6opowhlQSQ0Dx0SMD0M4WTxIVVBo8ahzE7LvcXjFqU0TVEEnITEr9%2B3oqEZfZAlxcFbU2i%2Bebyhp9iPLF414ENRz3VzAh%2BCiY8V9NIzwbg4m5ZR6j4kerHTRgixGzaC%2BWUMw%2FbLqwp8JahfeuQR8FoQy0Hzu%2FVSt28HLv5Xy2cTRvfgkzZp9Asht3lApDAT7OJE%2FyNibs5yhVBSdm5PAljg0HRNskET2mqPgeNF19wQ%2BLRzZqAVAwABhVSYzEmSES%2BIPq1nDsl4AE6o04cwVXQja93GxxiYoxMwNCjJdNyUdZZoBPLJPiHVGLd7%2BXPGBiPeFVDywuK8HI1nt9LMeuUYbE8TAvJcF4lpS%2F54BDlkttB3F9jjiv5uZzxqh6OuT1xCW52492pZn%2FHM4%2B1vhy6YAhS66Zlr%2BSy7Q%2BrxCbwXnBRozXZizftTgvV0yY0JR5JSYWu8W4JPPGoD0EB6yZlD3E0PrrSzM8Y5qGlo29hrOfbGW7HrfZIqrb5tpxnVyrGzXQu6Ov%2FQp%2B1IMRmWkwVb9Jv2HlrMmFkITpySI8oXbOr4gFs%2FmhfAXEu5Mqsq%2BsFYwnebLyQY6pgH838LkL%2Fe2V%2B96y7I83DiVSMlja6zFU6ixtREcBJsd0ahMcH30CSIWc6YEYlme63WLex432KIExBqQ99y5zRkS%2F2bliPBxQ69%2FogdL4EzuqHEwl5DKt%2Bt%2FEFM6JCleiaZktoNzd4lE7oMf%2FN8l6S5Lg4Vd%2BKDotetJ8%2F9Tp6QZ4ztOzEat4u6x2dd1yvPZB3rHAiSVsDz9mfZuj9UdKJQ37KuSGYgf&X-Amz-Signature=e1f73962e73d3613fcf5392129361776ef4ca9e93a68eb01c8029e94bbee196f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CUPW6J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7Vch2gfY0Z%2BjCQeqjacBeejBQwzyPUZa8iTzYQ%2FCIfAiBk4DHH8GU0r2tr0AE9bKvib7CdSwh6HeIeLC%2B5k%2Be0Hyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMW6LMbNPQjWW0gXPtKtwDuDncfZOLuKx2AZy7vxa9MZsCvjLM%2FxVxka0NOV2VLllpQ2Jq1jz%2BDFxf6opowhlQSQ0Dx0SMD0M4WTxIVVBo8ahzE7LvcXjFqU0TVEEnITEr9%2B3oqEZfZAlxcFbU2i%2Bebyhp9iPLF414ENRz3VzAh%2BCiY8V9NIzwbg4m5ZR6j4kerHTRgixGzaC%2BWUMw%2FbLqwp8JahfeuQR8FoQy0Hzu%2FVSt28HLv5Xy2cTRvfgkzZp9Asht3lApDAT7OJE%2FyNibs5yhVBSdm5PAljg0HRNskET2mqPgeNF19wQ%2BLRzZqAVAwABhVSYzEmSES%2BIPq1nDsl4AE6o04cwVXQja93GxxiYoxMwNCjJdNyUdZZoBPLJPiHVGLd7%2BXPGBiPeFVDywuK8HI1nt9LMeuUYbE8TAvJcF4lpS%2F54BDlkttB3F9jjiv5uZzxqh6OuT1xCW52492pZn%2FHM4%2B1vhy6YAhS66Zlr%2BSy7Q%2BrxCbwXnBRozXZizftTgvV0yY0JR5JSYWu8W4JPPGoD0EB6yZlD3E0PrrSzM8Y5qGlo29hrOfbGW7HrfZIqrb5tpxnVyrGzXQu6Ov%2FQp%2B1IMRmWkwVb9Jv2HlrMmFkITpySI8oXbOr4gFs%2FmhfAXEu5Mqsq%2BsFYwnebLyQY6pgH838LkL%2Fe2V%2B96y7I83DiVSMlja6zFU6ixtREcBJsd0ahMcH30CSIWc6YEYlme63WLex432KIExBqQ99y5zRkS%2F2bliPBxQ69%2FogdL4EzuqHEwl5DKt%2Bt%2FEFM6JCleiaZktoNzd4lE7oMf%2FN8l6S5Lg4Vd%2BKDotetJ8%2F9Tp6QZ4ztOzEat4u6x2dd1yvPZB3rHAiSVsDz9mfZuj9UdKJQ37KuSGYgf&X-Amz-Signature=4cc1d5651cda37b9a052d419d027bbe97718025f3226fb85f777e2945c6fff16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

