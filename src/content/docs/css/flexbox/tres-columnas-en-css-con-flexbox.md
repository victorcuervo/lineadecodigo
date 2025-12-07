---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEG2FZGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgY%2F7EnMUnUluDYoeJk0AcRfalazmJE8D6zlJeqViNOwIgGZSc17g5t828e%2BqIx%2Fcui0pvlvtZ4CT%2Fq7w2JuA5A0YqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkBC1UQTLpTDteHircA7ABiQIMc3i6EgqkG8wbv6Qb7%2F6ciT7mAg%2Fi1x35NuQ%2Bc6j%2F19cO5DPmxmtqSjJCSmrYgyl0prwMAgVkygLCjlgzmkvRlHzpebaW0PRUcQ6r8Vf7CptdM%2FbAOC2%2BBcYUVkD88rP%2F2Cg64JMt2%2BzPBX2A10AMd7xCXe%2B6hUztC7BsSyWDOgdGDi%2FC%2BdVhhx6xh89w4ROegZNU0mpzqEhoayhI9IXwFisY3zYfHCROI%2BqUiRjmNx8HVugYbplNWiiWMolRerbCd%2Bo7WJQwU2626T%2B%2BXk2fzplhRZ7ywhds0RKd0ytXdh3Ko90Ykeo7IiTPegarNT4Cwl7n7rCtpgmFo2hYL90aTjfj%2Bd0Qu%2FjUJvFd72Xr17XvN%2BCsti3KAUHAmPZE%2BcVU1P4DzmH9f9pJsD7qfIw4l11grpCBtmXwPaT%2B6XBLwLAqgnBHzY9sB79O2FQX5%2F3ZC36BdaN3z4nTBZJpWY5QMWTFPqw100DMQ6AtEqsHEePf58WHCHSg9FkG9v9dzLvAetskNLq43IHr6JbFxyrTT7GPByrip%2BSrDg%2B68QC6DFz0BAAn4evGhxmdn1Kfr9YDNYUD7TyY5F8gBs5zNwXm9pdnKMMYGa9C%2Fo%2BRFyNo9XoT%2BLgm5MZ4MNO%2F1skGOqUBzEailjEAnD%2FHlIw4ip4jRQjWiy5MJK7Ri4dZiZyHPJ4FD55awgmkjjvnhbgeoes7HfAPs8zgL7rXjlEt4R7Vk653eoJH%2BhgZJpyj6NSxOVKWTgmd%2BPRianTealaOipUYifWbbaiGeGnp3jdF0StMjTSWeo8jawqHlb2uUYkKxCeP61kU5gMumXla2U8yX4%2FShTJ4azbQurcH8CXFb0xpRzOs9tcU&X-Amz-Signature=e6a275adfa4da7be3278a378ac4c2dc346bf25d1b6a39dec9dd2ec76a776f224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEG2FZGW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgY%2F7EnMUnUluDYoeJk0AcRfalazmJE8D6zlJeqViNOwIgGZSc17g5t828e%2BqIx%2Fcui0pvlvtZ4CT%2Fq7w2JuA5A0YqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkBC1UQTLpTDteHircA7ABiQIMc3i6EgqkG8wbv6Qb7%2F6ciT7mAg%2Fi1x35NuQ%2Bc6j%2F19cO5DPmxmtqSjJCSmrYgyl0prwMAgVkygLCjlgzmkvRlHzpebaW0PRUcQ6r8Vf7CptdM%2FbAOC2%2BBcYUVkD88rP%2F2Cg64JMt2%2BzPBX2A10AMd7xCXe%2B6hUztC7BsSyWDOgdGDi%2FC%2BdVhhx6xh89w4ROegZNU0mpzqEhoayhI9IXwFisY3zYfHCROI%2BqUiRjmNx8HVugYbplNWiiWMolRerbCd%2Bo7WJQwU2626T%2B%2BXk2fzplhRZ7ywhds0RKd0ytXdh3Ko90Ykeo7IiTPegarNT4Cwl7n7rCtpgmFo2hYL90aTjfj%2Bd0Qu%2FjUJvFd72Xr17XvN%2BCsti3KAUHAmPZE%2BcVU1P4DzmH9f9pJsD7qfIw4l11grpCBtmXwPaT%2B6XBLwLAqgnBHzY9sB79O2FQX5%2F3ZC36BdaN3z4nTBZJpWY5QMWTFPqw100DMQ6AtEqsHEePf58WHCHSg9FkG9v9dzLvAetskNLq43IHr6JbFxyrTT7GPByrip%2BSrDg%2B68QC6DFz0BAAn4evGhxmdn1Kfr9YDNYUD7TyY5F8gBs5zNwXm9pdnKMMYGa9C%2Fo%2BRFyNo9XoT%2BLgm5MZ4MNO%2F1skGOqUBzEailjEAnD%2FHlIw4ip4jRQjWiy5MJK7Ri4dZiZyHPJ4FD55awgmkjjvnhbgeoes7HfAPs8zgL7rXjlEt4R7Vk653eoJH%2BhgZJpyj6NSxOVKWTgmd%2BPRianTealaOipUYifWbbaiGeGnp3jdF0StMjTSWeo8jawqHlb2uUYkKxCeP61kU5gMumXla2U8yX4%2FShTJ4azbQurcH8CXFb0xpRzOs9tcU&X-Amz-Signature=d442b714bfd3345b6d4b935d92acb45fb555eadd3001d6a0e36ce47d0f9e0147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

