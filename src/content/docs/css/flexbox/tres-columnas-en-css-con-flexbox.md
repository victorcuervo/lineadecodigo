---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHA2CD7B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARnBJ%2Bh3TpWrLvMV%2BlWFDzYW4qJTdI572oR8FoYqUWYAiEA7WEkhZsL908UwYQbGNiLEG%2BGqMGBsSPsY7v2z57dTdwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKqAz7x6tZO7CijDhyrcA%2BD3OVOvpAONBotwhmArpUyfeKxLwxaX%2Btr5unK4ngKFnF3nHUB5aG0%2FeA%2Bpk652x7%2Ffu9%2FMUvB69nJbV5YKLFE5vMR%2FRlhlM27eqr4nK582nUz8UZtkUC4cNhFp7j0YGxLNcA%2Fld8pvlFawPyXH3KK4%2BlPpXFu3VJupYvwNnkgzE3d9STcGO9Bh%2BFz1NN2SY3lXDcRGob58Kh%2BCkpz0ASEt%2BAZFf5dA5nLgrOsjIqjZ7545sVSKgqvlv7wKATDWadraq0rAYD1G3tOAAXdKXnVp3OeAxNZUZle5B7m4Lr8eMx6QQCg2OneyC3eGHV5AX4Ymix99KqU1tc1BIj9mxJNW3Gj2KtRlU%2BgxoMzukzBiNbQPZdrv%2FULLKpJA%2Fjaedv6KOo2lj%2B5Y0U7Napr%2FCEcNrzA4EXooq4TjLp1h2gt60bG5zNky3tGrBY%2BvEbFMpfAjfbyVDUEew1%2Fa4%2BkCt2dN5MjfZGf0sCwzLw2%2FEoZ8NG7K3o6oIUTUYRzTyZA%2FL0oV9XtS5LuDhcreAXSimq%2FKKLyxI1%2F7dD%2BbBdx2%2BiVmHn22K7rNDosWZE%2FJnPhpL43tB5HeUKePYoGqCEKD%2FXonL5VXCMpLfhJ4DXRIKpyrqPKCGaKgOeizRjK9MLO9z8kGOqUBEsy7NTynN%2Bur5KGMQBQugY73a3TWP%2BcFRMpHPpFhywvuMUkIwLFiJdhpXIRF9EkvzMKnX57dxluTFmUc4iKGDmnK94mCRFuXd%2FleKT5oyqmg96wZnrN5oNxqO%2FGzrI8BfLgkW54uevWEh8qy%2FUrH3k8lRZGyZY%2FUNpM%2BCw6XfkT%2FdymlqI5%2Fba0nYkbC3LnTTJ74O50cajl3409NgQoqfc5EsNCB&X-Amz-Signature=0716e4106c2088429e98053cac68a1e334ff8e9e240a755374073827e3c4c571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHA2CD7B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARnBJ%2Bh3TpWrLvMV%2BlWFDzYW4qJTdI572oR8FoYqUWYAiEA7WEkhZsL908UwYQbGNiLEG%2BGqMGBsSPsY7v2z57dTdwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKqAz7x6tZO7CijDhyrcA%2BD3OVOvpAONBotwhmArpUyfeKxLwxaX%2Btr5unK4ngKFnF3nHUB5aG0%2FeA%2Bpk652x7%2Ffu9%2FMUvB69nJbV5YKLFE5vMR%2FRlhlM27eqr4nK582nUz8UZtkUC4cNhFp7j0YGxLNcA%2Fld8pvlFawPyXH3KK4%2BlPpXFu3VJupYvwNnkgzE3d9STcGO9Bh%2BFz1NN2SY3lXDcRGob58Kh%2BCkpz0ASEt%2BAZFf5dA5nLgrOsjIqjZ7545sVSKgqvlv7wKATDWadraq0rAYD1G3tOAAXdKXnVp3OeAxNZUZle5B7m4Lr8eMx6QQCg2OneyC3eGHV5AX4Ymix99KqU1tc1BIj9mxJNW3Gj2KtRlU%2BgxoMzukzBiNbQPZdrv%2FULLKpJA%2Fjaedv6KOo2lj%2B5Y0U7Napr%2FCEcNrzA4EXooq4TjLp1h2gt60bG5zNky3tGrBY%2BvEbFMpfAjfbyVDUEew1%2Fa4%2BkCt2dN5MjfZGf0sCwzLw2%2FEoZ8NG7K3o6oIUTUYRzTyZA%2FL0oV9XtS5LuDhcreAXSimq%2FKKLyxI1%2F7dD%2BbBdx2%2BiVmHn22K7rNDosWZE%2FJnPhpL43tB5HeUKePYoGqCEKD%2FXonL5VXCMpLfhJ4DXRIKpyrqPKCGaKgOeizRjK9MLO9z8kGOqUBEsy7NTynN%2Bur5KGMQBQugY73a3TWP%2BcFRMpHPpFhywvuMUkIwLFiJdhpXIRF9EkvzMKnX57dxluTFmUc4iKGDmnK94mCRFuXd%2FleKT5oyqmg96wZnrN5oNxqO%2FGzrI8BfLgkW54uevWEh8qy%2FUrH3k8lRZGyZY%2FUNpM%2BCw6XfkT%2FdymlqI5%2Fba0nYkbC3LnTTJ74O50cajl3409NgQoqfc5EsNCB&X-Amz-Signature=43b56c6d5fa7c2f3374a377be3c0aa9487c0db82d0b9574d340b62dcb2c22ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

