---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSLRSJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1wElErRJyPUSk2ueAd8KTtwQ%2FewDbLUDlfT%2FBQYBkzAIhALMGnrnztSebVgbzk55ouCFy%2BVaPkF93fdV5GZ8Wx%2BbtKv8DCHIQABoMNjM3NDIzMTgzODA1IgzF%2FvQKTLahLNHLPn4q3AP1IJAYQV9Qj1GuoAhJRZVV1NMjo%2BSqTHyWwsU3XNXv%2Ftvuo8IE9sIrOXH1BuMOxaU4rXDOCEoSbPxEPwB%2FNwFfXBYlco2msHSC7cYI9iopMcF0cWnuYTN%2FT9PncXKF536QnXHWvZJig9Kb7UjWIDhoraIBBx7vT9Q3FDNGQD3k1dPxmUelX%2Bie1QuNsAPC1z4J5ntAsp%2BTlbVaiKaE2su2f%2Bx0wu4l45ramzHjQuW1P5Eb%2BCJmajlms4kJNj944q4FNs%2Fqk6TvuynkR2dF%2B8aBpnS1FxUaID39neM%2BLgXPtF9aYtBNUa6ikyegs2sGY9nIoaC4G0kddiH3sSb3UdwiBB5nreajgwQq%2FMnOmsY3SFaJDvLurl1biw5o42Yn5hg2G%2Bqzo8eMTgvTR3x%2FXU3WN%2FGoRJquagP6Y%2B14JJV4jhuIWwf1sIPj524RgI6hmbhv7J%2B0y1HutulCoKZUjixGtNLmdJFg3j%2BKf2i1ZLX%2FzJm3Zhf7AE%2BSab6ZsDH2cnEqty6Scm%2Bzrpq5eu8dvLCHWW%2B%2FPdtMElkLBVhFTOT4MPk2PHHcex69za4kic6xtBfK9%2ByrfaYAYn%2B%2F7UKgfhqdYu79F65z0K2WAPcywFn2TOnf2i91NcssVfLdRTD76s%2FJBjqkAa957xT0HXbeiPYqjAqvhGJiWAec%2FhnZma8kQ7xjgnnc9mSoXsvDQxkRuEcjNriX52UXmmfiK5wCNBIjrTf4RI%2Be7o7Ko%2Bzmwg9tWtO9J4Z1DMzKD6eqlbVGGqTYEkr6uGQOJLUYkizx8lUGXEtOW7z9l0eoLfQO8e5dOAq4TDLCs3RwJDT5FLZGa6rehWdC13ENWbgXKlAngw0viH%2B7N9XMmh6a&X-Amz-Signature=3443df95ca13385fa0862f6a27d4206a3eaa491f3a877a309dc29db6ac63a204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSLRSJV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1wElErRJyPUSk2ueAd8KTtwQ%2FewDbLUDlfT%2FBQYBkzAIhALMGnrnztSebVgbzk55ouCFy%2BVaPkF93fdV5GZ8Wx%2BbtKv8DCHIQABoMNjM3NDIzMTgzODA1IgzF%2FvQKTLahLNHLPn4q3AP1IJAYQV9Qj1GuoAhJRZVV1NMjo%2BSqTHyWwsU3XNXv%2Ftvuo8IE9sIrOXH1BuMOxaU4rXDOCEoSbPxEPwB%2FNwFfXBYlco2msHSC7cYI9iopMcF0cWnuYTN%2FT9PncXKF536QnXHWvZJig9Kb7UjWIDhoraIBBx7vT9Q3FDNGQD3k1dPxmUelX%2Bie1QuNsAPC1z4J5ntAsp%2BTlbVaiKaE2su2f%2Bx0wu4l45ramzHjQuW1P5Eb%2BCJmajlms4kJNj944q4FNs%2Fqk6TvuynkR2dF%2B8aBpnS1FxUaID39neM%2BLgXPtF9aYtBNUa6ikyegs2sGY9nIoaC4G0kddiH3sSb3UdwiBB5nreajgwQq%2FMnOmsY3SFaJDvLurl1biw5o42Yn5hg2G%2Bqzo8eMTgvTR3x%2FXU3WN%2FGoRJquagP6Y%2B14JJV4jhuIWwf1sIPj524RgI6hmbhv7J%2B0y1HutulCoKZUjixGtNLmdJFg3j%2BKf2i1ZLX%2FzJm3Zhf7AE%2BSab6ZsDH2cnEqty6Scm%2Bzrpq5eu8dvLCHWW%2B%2FPdtMElkLBVhFTOT4MPk2PHHcex69za4kic6xtBfK9%2ByrfaYAYn%2B%2F7UKgfhqdYu79F65z0K2WAPcywFn2TOnf2i91NcssVfLdRTD76s%2FJBjqkAa957xT0HXbeiPYqjAqvhGJiWAec%2FhnZma8kQ7xjgnnc9mSoXsvDQxkRuEcjNriX52UXmmfiK5wCNBIjrTf4RI%2Be7o7Ko%2Bzmwg9tWtO9J4Z1DMzKD6eqlbVGGqTYEkr6uGQOJLUYkizx8lUGXEtOW7z9l0eoLfQO8e5dOAq4TDLCs3RwJDT5FLZGa6rehWdC13ENWbgXKlAngw0viH%2B7N9XMmh6a&X-Amz-Signature=e5152886c6430ab193168f2dd0859445ef47c1b9110177db9affaf187c81ad0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

