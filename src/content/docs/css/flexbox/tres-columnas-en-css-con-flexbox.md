---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP26Y22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCMiq6O613CWXhwr1EKryghvEsLWaAJYMMJrJoVx3jZ4wIhAPThZZ%2F3xTAlGpqoMJId4okz5A2uV0Ilyqktynbrq5yqKv8DCEYQABoMNjM3NDIzMTgzODA1IgxbZrXBjW7zOPPu%2BF0q3ANII5cwHXRiF9sXUkX7cwwdcvXC1hkJCEJqM2AACpZVfkDFhFFZk1p6ija8fzT9rKdMcVk6pR1LLi5EnpRgWFROvP%2BorYvQZC7cH17Ts5iYkJeW9CatGKoBRT70p3H%2FitoS42oZ06h3O3s86HMmysxrB%2BMjMYUJMJQcCsYBik4HO7d4LJ%2FuuYPx0TjdCYkH4i9fFbxAGWYeaJParIeVffxTgWYSEc5Wo6YhZJkcbPZwSviLIdLFV0fbMYNS7wokO4YGG7m%2BqD9Lko%2Bp7YIXAlaMBVlrzKHb3suLPsQSFA%2BEge3zUFu9PaVwk5EJhNsBTkV2ASC30CnRab9BCK4FC6syAYjVsTYZKq7KOogKLR4Uo4ClBgTZswj6vZ%2FtMFq5kBeTrFHDxByGfuuoEvpcp6c%2B2TQjsjH3sQrCjN41IjvAASgYhJyFxEJ5XmZWE2cO1Uw1xVh%2B20WykV7DekkkuSXUPplnJksq7KVsxdvltA92XJ8sRYQAf9pSKBnQH7al1qUFl35LMwk%2B%2FxuOVxp5m5G%2FqjPtaOncZSgYCvht%2FhC7ght82qxcA95DWNAebbGRnxYVSFCdn7vMc%2Fs%2FaJJ3ud7NH1qnYJHa0bESQyBMHswLOqUPufr5Pp2TgnizMjDrg8bJBjqkAShSmWefD4b7r3vORuAsXSfh%2Bbmk7DpivXNdQ6%2BVWaSNdiJmdwXDaaJty5ysYzacXYOHZQ46kf%2BEuASs2kayGMIshmAh56A7lGckjP0kG5z3Q2nAhRqWS15MmpZzhspezIJCO5aF9gWxAxLoXPjvTPBy5%2FP4eSz7zSgVGIDq6oZl0f3xizfc%2Ft0e1wrOy4Le91JhjcGO3O92gdBEcQfX%2Bd5MvLdR&X-Amz-Signature=3da6165c1a58c6f69a5965563b9ff592dfe51a3c2b0dfdb6b1b17a5de4a9bd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP26Y22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCMiq6O613CWXhwr1EKryghvEsLWaAJYMMJrJoVx3jZ4wIhAPThZZ%2F3xTAlGpqoMJId4okz5A2uV0Ilyqktynbrq5yqKv8DCEYQABoMNjM3NDIzMTgzODA1IgxbZrXBjW7zOPPu%2BF0q3ANII5cwHXRiF9sXUkX7cwwdcvXC1hkJCEJqM2AACpZVfkDFhFFZk1p6ija8fzT9rKdMcVk6pR1LLi5EnpRgWFROvP%2BorYvQZC7cH17Ts5iYkJeW9CatGKoBRT70p3H%2FitoS42oZ06h3O3s86HMmysxrB%2BMjMYUJMJQcCsYBik4HO7d4LJ%2FuuYPx0TjdCYkH4i9fFbxAGWYeaJParIeVffxTgWYSEc5Wo6YhZJkcbPZwSviLIdLFV0fbMYNS7wokO4YGG7m%2BqD9Lko%2Bp7YIXAlaMBVlrzKHb3suLPsQSFA%2BEge3zUFu9PaVwk5EJhNsBTkV2ASC30CnRab9BCK4FC6syAYjVsTYZKq7KOogKLR4Uo4ClBgTZswj6vZ%2FtMFq5kBeTrFHDxByGfuuoEvpcp6c%2B2TQjsjH3sQrCjN41IjvAASgYhJyFxEJ5XmZWE2cO1Uw1xVh%2B20WykV7DekkkuSXUPplnJksq7KVsxdvltA92XJ8sRYQAf9pSKBnQH7al1qUFl35LMwk%2B%2FxuOVxp5m5G%2FqjPtaOncZSgYCvht%2FhC7ght82qxcA95DWNAebbGRnxYVSFCdn7vMc%2Fs%2FaJJ3ud7NH1qnYJHa0bESQyBMHswLOqUPufr5Pp2TgnizMjDrg8bJBjqkAShSmWefD4b7r3vORuAsXSfh%2Bbmk7DpivXNdQ6%2BVWaSNdiJmdwXDaaJty5ysYzacXYOHZQ46kf%2BEuASs2kayGMIshmAh56A7lGckjP0kG5z3Q2nAhRqWS15MmpZzhspezIJCO5aF9gWxAxLoXPjvTPBy5%2FP4eSz7zSgVGIDq6oZl0f3xizfc%2Ft0e1wrOy4Le91JhjcGO3O92gdBEcQfX%2Bd5MvLdR&X-Amz-Signature=4a636ce93c18f88a144cf4faf1a4dc8e7b8acf4dfcd362506f8d62c515641b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

