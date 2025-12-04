---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHHYDM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDCCfNpkzlzQb2%2Fm5myTs1fVDdK6gGQsZ4hnnTSBoj3xQIgDz7XvzGWiTCaayLW1E1KxEjH8bq5vczwM0lzHgL2waAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBlz6uQfictKwWDjOircA5VbN7mO8JH2vAXyrEpV6wjQIsi%2BCXFrgrDWfx%2FUa93axRQzmLnWBECKZBN8V4ymk2qAHRKCva1%2BCjx%2F2pH7WA5ErYeLCXMv7kqDSI%2Fq8hsFOLORTS3Rtl%2FeLoWlpLDda9P%2F7U9owrg29jCsk%2F6R3ZLjlzvmkc%2FCy4TBghpGliGOBhy4x4IqoI%2B%2BpO5SdX5qYYgIhlf69asedtr8rqE4HIdim2WlWAmhMR7IY%2F%2FRIyOdJGYVgn0RvgtYWCl7sdKqRy5VEjBE51i%2BRZMje3vsxMt2SJPBGZLCn4YeJ8tji4F8ruJuDr%2B1sJTpK3MfmVffb5eVWJwl0V0Rd5GJdVQhtmUyKF5fymcvWAmXH3F%2FcdMdjlEqhJcIVzBcwboQGJOJsHyT8gbdQ4UGgtaq6vc58rlJZTIlvJJwZOIcpIB%2BbKuSgbUrsTDzS9FsmjolVuZ5yprdMUndnSXNCUd8XL0A18V5gW7xsNl%2FZGucce6lo6%2FUvlfqsXNnxaLIp7EesjKCqInot4VV2fIvVcX6PrLlpdhNTREpxrsFCenetfk%2Bgj%2BVjVs7p51UT8zwXHNmYHDC351msc2qf0dgC4h1Z3O1L2OFWIQ1T1oUi%2BhkOFNi8F6X5Eosbaz5bs8WYeT6MMzzw8kGOqUB91gCRRzJBbGHqKM4KloGytxZu7C70X0zfVsjAW5JTCoC3HwUgnjzCkcTrhkxxGCccSVKYUIuX3ljKQu7nXcy%2FeGHYYXqsZOjYdyR5FWT1LDbJvNYzRFNcmXlbUF8byootfGsPWF1qDfI4dhoWi1k5suTWMjFPwh3ZDodvAlOE2rwCt%2F%2BiZ0HDos1hJq6DkDL86UZFnEL8t2KPNtddbQrK6RrYIc%2B&X-Amz-Signature=991f33663bdf963823c8eb04331d03487e31c13d5db36835cc12dee2c869a2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHHYDM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDCCfNpkzlzQb2%2Fm5myTs1fVDdK6gGQsZ4hnnTSBoj3xQIgDz7XvzGWiTCaayLW1E1KxEjH8bq5vczwM0lzHgL2waAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBlz6uQfictKwWDjOircA5VbN7mO8JH2vAXyrEpV6wjQIsi%2BCXFrgrDWfx%2FUa93axRQzmLnWBECKZBN8V4ymk2qAHRKCva1%2BCjx%2F2pH7WA5ErYeLCXMv7kqDSI%2Fq8hsFOLORTS3Rtl%2FeLoWlpLDda9P%2F7U9owrg29jCsk%2F6R3ZLjlzvmkc%2FCy4TBghpGliGOBhy4x4IqoI%2B%2BpO5SdX5qYYgIhlf69asedtr8rqE4HIdim2WlWAmhMR7IY%2F%2FRIyOdJGYVgn0RvgtYWCl7sdKqRy5VEjBE51i%2BRZMje3vsxMt2SJPBGZLCn4YeJ8tji4F8ruJuDr%2B1sJTpK3MfmVffb5eVWJwl0V0Rd5GJdVQhtmUyKF5fymcvWAmXH3F%2FcdMdjlEqhJcIVzBcwboQGJOJsHyT8gbdQ4UGgtaq6vc58rlJZTIlvJJwZOIcpIB%2BbKuSgbUrsTDzS9FsmjolVuZ5yprdMUndnSXNCUd8XL0A18V5gW7xsNl%2FZGucce6lo6%2FUvlfqsXNnxaLIp7EesjKCqInot4VV2fIvVcX6PrLlpdhNTREpxrsFCenetfk%2Bgj%2BVjVs7p51UT8zwXHNmYHDC351msc2qf0dgC4h1Z3O1L2OFWIQ1T1oUi%2BhkOFNi8F6X5Eosbaz5bs8WYeT6MMzzw8kGOqUB91gCRRzJBbGHqKM4KloGytxZu7C70X0zfVsjAW5JTCoC3HwUgnjzCkcTrhkxxGCccSVKYUIuX3ljKQu7nXcy%2FeGHYYXqsZOjYdyR5FWT1LDbJvNYzRFNcmXlbUF8byootfGsPWF1qDfI4dhoWi1k5suTWMjFPwh3ZDodvAlOE2rwCt%2F%2BiZ0HDos1hJq6DkDL86UZFnEL8t2KPNtddbQrK6RrYIc%2B&X-Amz-Signature=5bfd7cdcba15f65c82c9b804dbdd5457f4aaea49239ac0de100107b34a5a9579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

