---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSYDQNW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cZaXf2Bw1jtJp1xkIq5jHQhjXfp%2FhA4gxVbd2FqmOAiEAi8eyVhMC7WpCpK%2BbaimzZUC0Tnsgt%2FoI%2BjwAfwVegTgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFsECnM%2BU3BAqThyRCrcAymmV4snJsDjz70fBgK3utVuEN9nd99WX1H4powxAUrB2o95%2FvxPnpBB0kOazi7W23%2F51sbtr9dkXmXFpYjMDzD1hyaqUFb0y0WFb5416F93qOEvaIm2WvphV8FYzdre6LS6%2FQywdPYC%2BSzDbl6dIeJnaqR8AlorZw9glkE7q2BuClWG3RZG8QFbQz86Zhu7xmragQ%2BLsMeH7j1rG2esGfCsXWARY4UOJWSsHAi11N5sj%2FgHVhHX679IkMChmWFyD8KZmRzi%2FNzkxdqmYGseKjthAKv4D0LtPe%2B8TB3CkTDxeSXogU5HxfM7StjYIAPOaZbzDSV1qFaLE8%2FkXw32P0f3L91YUCzDcNiB%2FwcOciPBjHTdeJ73qVekxS5dCK2vF8B1ab2ZxGLxydxWQ%2FHpYEumXEOdnSa%2FRhq4FfymKVXtRMJEEpbbS%2BZP84BzYrPQ3mTdWI4eWBpyiK378wIeHUaxX92r6jrJWPNoYEcMYPQYACVkYKsyiayKpHB49U6LXXctFTbf6YAv%2FMBIJfWHThewuTTtFGLi1Pg4xn4n2R%2BhwanNQnpZ4SjVuACAR33jcj5zqRYX%2Ba64hrtzylFUS4a5SLg2trky4PpzsJAIApyk7Q2xTPpBEKJwGn3iMIHT0skGOqUB7jBvDYk2TBx65rP%2FraZtBvqJVEB4ZSocYBWjui3C8gBJeOdplZBHJmoWcuE%2F4YJ4vbHBeR1tSjpe7cJMmgfcqZhMuFe5oSwjpH3jPuN6%2FGvSsy9x3DF%2B4dAhqgpmKsEcoSOAJQT0ULrpPM5BnLZHgWtLas0fVHQDtFDPQj3gXc3aDGyA9JU%2FhkDcOLPOi7HPSXgkBm3%2B%2F2J8sOp5VhWgDPoygx1R&X-Amz-Signature=9b5469145411608114cc3c7d7590ef23a94dfef7abd6303858353bf79c5e3eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSYDQNW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0cZaXf2Bw1jtJp1xkIq5jHQhjXfp%2FhA4gxVbd2FqmOAiEAi8eyVhMC7WpCpK%2BbaimzZUC0Tnsgt%2FoI%2BjwAfwVegTgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFsECnM%2BU3BAqThyRCrcAymmV4snJsDjz70fBgK3utVuEN9nd99WX1H4powxAUrB2o95%2FvxPnpBB0kOazi7W23%2F51sbtr9dkXmXFpYjMDzD1hyaqUFb0y0WFb5416F93qOEvaIm2WvphV8FYzdre6LS6%2FQywdPYC%2BSzDbl6dIeJnaqR8AlorZw9glkE7q2BuClWG3RZG8QFbQz86Zhu7xmragQ%2BLsMeH7j1rG2esGfCsXWARY4UOJWSsHAi11N5sj%2FgHVhHX679IkMChmWFyD8KZmRzi%2FNzkxdqmYGseKjthAKv4D0LtPe%2B8TB3CkTDxeSXogU5HxfM7StjYIAPOaZbzDSV1qFaLE8%2FkXw32P0f3L91YUCzDcNiB%2FwcOciPBjHTdeJ73qVekxS5dCK2vF8B1ab2ZxGLxydxWQ%2FHpYEumXEOdnSa%2FRhq4FfymKVXtRMJEEpbbS%2BZP84BzYrPQ3mTdWI4eWBpyiK378wIeHUaxX92r6jrJWPNoYEcMYPQYACVkYKsyiayKpHB49U6LXXctFTbf6YAv%2FMBIJfWHThewuTTtFGLi1Pg4xn4n2R%2BhwanNQnpZ4SjVuACAR33jcj5zqRYX%2Ba64hrtzylFUS4a5SLg2trky4PpzsJAIApyk7Q2xTPpBEKJwGn3iMIHT0skGOqUB7jBvDYk2TBx65rP%2FraZtBvqJVEB4ZSocYBWjui3C8gBJeOdplZBHJmoWcuE%2F4YJ4vbHBeR1tSjpe7cJMmgfcqZhMuFe5oSwjpH3jPuN6%2FGvSsy9x3DF%2B4dAhqgpmKsEcoSOAJQT0ULrpPM5BnLZHgWtLas0fVHQDtFDPQj3gXc3aDGyA9JU%2FhkDcOLPOi7HPSXgkBm3%2B%2F2J8sOp5VhWgDPoygx1R&X-Amz-Signature=a7ca8c6ab93a80e3cbe07c6ae406605d92d868bee0a217ee1cf20227ae0c192c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

