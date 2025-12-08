---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFX5D3L5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD%2BCON%2F%2BtbDhApWFHdKsU5F572fkwz73y9NX7W5Tf2BAiEApiwh928%2Fh0U0D1GBKnSFq2XnWbxlGBtk3UOghuXPjOUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgOsxBXYWJPIMQupCrcA3JMCj%2BHrnAOS0aTV8kDbDZMx0q15EqahCJpSY%2FE39zhBnaWs8FFgR2kqjuqFXiXVRvhGDsz9HqmiuIe7auOE8tUDWv5q9v46bBOwp%2BCzjECZSE9IAAWaH2wUim8DrrUCGvBHgMpv9liXAXZh9myXUra1kxRwUFEtvoXot0Fdus%2BAHucMtc7AEVAttfqL4A8n5QEkQn64AnNs%2BkzoBoay9jHbz9ZqqX6cmYdWCfGB3368lkld6LbksTp%2BfFRKRwVfyYe%2BqFm8X%2FzrbSdei1PpVxpg1RetXoH23TJO0DRxyRYIhGZXwlUt760htjiHN3KRz4S6G10RYTmZnHobtMY9GmukXlhWrIRCCsLnU9tTk6Td0ofBShbbgSyr2%2FlsKsF%2BP3J8cKoI%2BpgXUxWNHUHZW5K6%2BRKZeNAcBk4e40pJYfYWjSFOKWi42IbVqmlUJA4aCapL1JT4MI9trz%2Bo63N9dSFyibEJ6LE87kWgNwS1Vd8wC6vIXb285q4Yopu8sy80GgoBKZUDlQBadSga1MTq927SEu8077bn0PL7%2FMXZebZV2lxjDrjBtYmaYq0jUSNjBn2UOLAxeEt04xrKXpCCzdRxXFJcTQXGLjI9nJYdTORLXncX%2FMzGva452bnMK%2Fk28kGOqUB0jC9NhwJXuYs9mWq0fSUj0PKmixdH9tQsA7D05LY%2BVFt3cuFFCkDJ3WCfJZU8sBgpphv6OQbwA89DdFOTw54VEF9KJhMBIh44N1S9M80xAzSbLKRZyHrT9YF0bZznQ27EW%2F2njLJU92avQlIlaWMzBLa2QWdez9dXhOJQ1OoHRb12ooJPkuy1dJuNyd9zodGexr4gXhdbbY67UCBLQP1kZnfwGaq&X-Amz-Signature=fe2e20b6b5f841fd90414f578aff903ab1d3a079dbee8b57460f53c72ecf2670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFX5D3L5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD%2BCON%2F%2BtbDhApWFHdKsU5F572fkwz73y9NX7W5Tf2BAiEApiwh928%2Fh0U0D1GBKnSFq2XnWbxlGBtk3UOghuXPjOUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgOsxBXYWJPIMQupCrcA3JMCj%2BHrnAOS0aTV8kDbDZMx0q15EqahCJpSY%2FE39zhBnaWs8FFgR2kqjuqFXiXVRvhGDsz9HqmiuIe7auOE8tUDWv5q9v46bBOwp%2BCzjECZSE9IAAWaH2wUim8DrrUCGvBHgMpv9liXAXZh9myXUra1kxRwUFEtvoXot0Fdus%2BAHucMtc7AEVAttfqL4A8n5QEkQn64AnNs%2BkzoBoay9jHbz9ZqqX6cmYdWCfGB3368lkld6LbksTp%2BfFRKRwVfyYe%2BqFm8X%2FzrbSdei1PpVxpg1RetXoH23TJO0DRxyRYIhGZXwlUt760htjiHN3KRz4S6G10RYTmZnHobtMY9GmukXlhWrIRCCsLnU9tTk6Td0ofBShbbgSyr2%2FlsKsF%2BP3J8cKoI%2BpgXUxWNHUHZW5K6%2BRKZeNAcBk4e40pJYfYWjSFOKWi42IbVqmlUJA4aCapL1JT4MI9trz%2Bo63N9dSFyibEJ6LE87kWgNwS1Vd8wC6vIXb285q4Yopu8sy80GgoBKZUDlQBadSga1MTq927SEu8077bn0PL7%2FMXZebZV2lxjDrjBtYmaYq0jUSNjBn2UOLAxeEt04xrKXpCCzdRxXFJcTQXGLjI9nJYdTORLXncX%2FMzGva452bnMK%2Fk28kGOqUB0jC9NhwJXuYs9mWq0fSUj0PKmixdH9tQsA7D05LY%2BVFt3cuFFCkDJ3WCfJZU8sBgpphv6OQbwA89DdFOTw54VEF9KJhMBIh44N1S9M80xAzSbLKRZyHrT9YF0bZznQ27EW%2F2njLJU92avQlIlaWMzBLa2QWdez9dXhOJQ1OoHRb12ooJPkuy1dJuNyd9zodGexr4gXhdbbY67UCBLQP1kZnfwGaq&X-Amz-Signature=2e8a987cc28c9b6a8d2bc792f44d9ae49cff0a290f3e3d83361856377b305130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

