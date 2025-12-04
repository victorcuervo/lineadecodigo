---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HJBO2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIClnyal3EigleIylNvS5JvXNlWZD4ELD6%2FpgpkIGUqLgAiEAg76axWsrEnHUVZtdM8i8xwBdD%2BgdFiswWrk1z5CxlYMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHvhglV0kumy%2FG6pzyrcA5GUTgYq0jsMJ63GRUymFltBH7NN7jg730PTrh%2FuDD2mwdJGRsARGtUdt8qKNzhapIX01XkV8qFtDCIw0JL3Wihucysx9yzBI9YXDo1hJoWsNPOZHYD02%2FDRO3RWVsMFvSJprANY8LUDooqUfaen37mC9fgu7ySAHi7a%2FxZnEtMJJw04HY4TRKAV19pqx96wQilFpPZ58OEKwl5Hv%2FnYk%2FZ6ivJB%2FmNHjd6sZrxn368tLB7V7FhvzWQYqGX3QRo%2BvWjHj2RJkT5%2Fdw5vmyUr47nT%2F9Pvxj5AIMR%2FP39UNxSNZBzSdPlRrI45V1IcGgk58LU3fHseXL2zvOomt2tFK7%2FlYX5O0Q%2BJKBuTCS9AhRPi3opW7hM%2B7FJbE7erVrfCtiO52e7a9n1CZ4i4sj23cGWHB%2FzpPjm9prF3tQ02noOcLkYMDb29WKBixh6z3ZE1psz8NDwUa15jSrz3%2BiyJUuaJekpAO3SPxVGl68lY6PQpAlwdSACwwqBwQUoBl2Mh8IIbV8WXdCGyQoBbfaIR%2FO%2FGU56gOf2WrETjIo7gs4YT3QBqDNnEOMg9KzPfIbmG8FBDBWCF95qZkmCYDd8hyiagLbSPhRZcvXk0%2FBUqC3rbgB9MIgZtvMRP4LrUMN7Uw8kGOqUBO4GfMTmi2pVdco5me16jyGtNl7v1JQzMDRJknW48XPDBd6ijh5gQY2gYTphAvp63f7QEqDTXhkziC%2F6QIGJj7gYpBGdQGwjsjxopNzOLuhtINVaSzGHG9Tk3uRUsCFtNWvlrMauJadKhdXaPYi5H0mXD%2BQQZWxqXtyqNRab4aJA4FnkOBvCnXJpjYI852A0phLMjBNPtxRjt6GmD%2BODBIBKz%2BJ9f&X-Amz-Signature=485831d1d5687cc2a732847c916260364a1d4ea610e5cd2629d721ab236e093b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HJBO2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIClnyal3EigleIylNvS5JvXNlWZD4ELD6%2FpgpkIGUqLgAiEAg76axWsrEnHUVZtdM8i8xwBdD%2BgdFiswWrk1z5CxlYMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHvhglV0kumy%2FG6pzyrcA5GUTgYq0jsMJ63GRUymFltBH7NN7jg730PTrh%2FuDD2mwdJGRsARGtUdt8qKNzhapIX01XkV8qFtDCIw0JL3Wihucysx9yzBI9YXDo1hJoWsNPOZHYD02%2FDRO3RWVsMFvSJprANY8LUDooqUfaen37mC9fgu7ySAHi7a%2FxZnEtMJJw04HY4TRKAV19pqx96wQilFpPZ58OEKwl5Hv%2FnYk%2FZ6ivJB%2FmNHjd6sZrxn368tLB7V7FhvzWQYqGX3QRo%2BvWjHj2RJkT5%2Fdw5vmyUr47nT%2F9Pvxj5AIMR%2FP39UNxSNZBzSdPlRrI45V1IcGgk58LU3fHseXL2zvOomt2tFK7%2FlYX5O0Q%2BJKBuTCS9AhRPi3opW7hM%2B7FJbE7erVrfCtiO52e7a9n1CZ4i4sj23cGWHB%2FzpPjm9prF3tQ02noOcLkYMDb29WKBixh6z3ZE1psz8NDwUa15jSrz3%2BiyJUuaJekpAO3SPxVGl68lY6PQpAlwdSACwwqBwQUoBl2Mh8IIbV8WXdCGyQoBbfaIR%2FO%2FGU56gOf2WrETjIo7gs4YT3QBqDNnEOMg9KzPfIbmG8FBDBWCF95qZkmCYDd8hyiagLbSPhRZcvXk0%2FBUqC3rbgB9MIgZtvMRP4LrUMN7Uw8kGOqUBO4GfMTmi2pVdco5me16jyGtNl7v1JQzMDRJknW48XPDBd6ijh5gQY2gYTphAvp63f7QEqDTXhkziC%2F6QIGJj7gYpBGdQGwjsjxopNzOLuhtINVaSzGHG9Tk3uRUsCFtNWvlrMauJadKhdXaPYi5H0mXD%2BQQZWxqXtyqNRab4aJA4FnkOBvCnXJpjYI852A0phLMjBNPtxRjt6GmD%2BODBIBKz%2BJ9f&X-Amz-Signature=3225eb74c73880aa54e39081ef0f9efe60a7f2d144de83a7be34a86982fc8ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

