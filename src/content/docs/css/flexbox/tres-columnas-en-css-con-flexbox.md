---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MY5OVD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ysOMVo3jDdAOpvZJdjo%2Fyk2Es7YRiVgI%2FVpSwK5%2FMwIgIalF8tiSwG0R1SkmsVLXA7Mp4mUIIlRZzPFkuV01kCEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCgnzOkxT7iRWChetSrcA8ewMDKbQ2BvhGE2ogQS9vwAhSituYREkVLDUi37wFmKApDSHpDjdCHfNbuX05qpaQDvITC%2FQq3ktYuW8g4M5fU%2BKtJRCZBNQfXHtXjot1BmLfoh4KbT3iTvMgQ4jfsSHhO1gaL7jBeVdj6qn%2FEmKuahmYGKZ8tY0iAp92ilybAJ1Lm6hQ47FqJ%2FaTnoqgzZZU8DWETJGi%2F%2F7L3Dxl0pN02QE8Lw6%2B%2B37ZFh4f%2F8MXiNpx5uU1zb25yk2RZEqlOGz%2BOC9nwzp0WJqbJDJLimcbcHMKMfni%2FqwJrUDrqwZKjEdrQzLpfs17DlxNh7d%2BIamz3ucn8rnM%2BZdUhUBIStSVEFkWBW95oE0I%2FnqXh%2B7NybqaGOlw2OIfzBKXkq4bLqv%2Bn2kGzbjLcEWgcaZNf9ThZX5I3TnOOLIgTWWVh6fXBGeoq5y8Ekpz0RRCLwLJu9bEQNQHrdBe6WmaKZ3Q%2B3veaYH6TNWxw54boK8BspMDiM31uu46EeNPoBlxcY3uX8RML75gU%2B1ScussohO6gS4HADJxNjZkx6633ZbFDMZJQopeACIslp4M8D0ias0qygDznCYcspX200pfUytL5DsZbOPfmORyA24MkfGjpmfxpXfX14qHkSTc7XhN89MJSqyckGOqUBJghlCF9fT2jNMxhah3HEZCoJXJ6Q%2Bq%2BwkdawBgQlQQqVwJblwjUiqiVjgd2a7ckXQ%2BsaEXn%2FSpee8feqSipBX5Q%2BRFcXL0pC88K0uGMJvumOgFLsgQGYG8H6W6IE4ld3ngO9KqkOQoaRu3EGiazysCP9Gnst69Z5sV7nfiD370jr00kY%2BglKR1l0w%2FUK7LLN3GUDMEDzVc8DTm2an%2FNqXwpky05h&X-Amz-Signature=761a87c1d3811082ea8596050147afc9495dcdabf76668da6d2018fb6e8ae838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MY5OVD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ysOMVo3jDdAOpvZJdjo%2Fyk2Es7YRiVgI%2FVpSwK5%2FMwIgIalF8tiSwG0R1SkmsVLXA7Mp4mUIIlRZzPFkuV01kCEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCgnzOkxT7iRWChetSrcA8ewMDKbQ2BvhGE2ogQS9vwAhSituYREkVLDUi37wFmKApDSHpDjdCHfNbuX05qpaQDvITC%2FQq3ktYuW8g4M5fU%2BKtJRCZBNQfXHtXjot1BmLfoh4KbT3iTvMgQ4jfsSHhO1gaL7jBeVdj6qn%2FEmKuahmYGKZ8tY0iAp92ilybAJ1Lm6hQ47FqJ%2FaTnoqgzZZU8DWETJGi%2F%2F7L3Dxl0pN02QE8Lw6%2B%2B37ZFh4f%2F8MXiNpx5uU1zb25yk2RZEqlOGz%2BOC9nwzp0WJqbJDJLimcbcHMKMfni%2FqwJrUDrqwZKjEdrQzLpfs17DlxNh7d%2BIamz3ucn8rnM%2BZdUhUBIStSVEFkWBW95oE0I%2FnqXh%2B7NybqaGOlw2OIfzBKXkq4bLqv%2Bn2kGzbjLcEWgcaZNf9ThZX5I3TnOOLIgTWWVh6fXBGeoq5y8Ekpz0RRCLwLJu9bEQNQHrdBe6WmaKZ3Q%2B3veaYH6TNWxw54boK8BspMDiM31uu46EeNPoBlxcY3uX8RML75gU%2B1ScussohO6gS4HADJxNjZkx6633ZbFDMZJQopeACIslp4M8D0ias0qygDznCYcspX200pfUytL5DsZbOPfmORyA24MkfGjpmfxpXfX14qHkSTc7XhN89MJSqyckGOqUBJghlCF9fT2jNMxhah3HEZCoJXJ6Q%2Bq%2BwkdawBgQlQQqVwJblwjUiqiVjgd2a7ckXQ%2BsaEXn%2FSpee8feqSipBX5Q%2BRFcXL0pC88K0uGMJvumOgFLsgQGYG8H6W6IE4ld3ngO9KqkOQoaRu3EGiazysCP9Gnst69Z5sV7nfiD370jr00kY%2BglKR1l0w%2FUK7LLN3GUDMEDzVc8DTm2an%2FNqXwpky05h&X-Amz-Signature=c4ea38737fdb0c52481e8d8880a548cd5fc78e9b8d0a494f28a636dea31457b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

