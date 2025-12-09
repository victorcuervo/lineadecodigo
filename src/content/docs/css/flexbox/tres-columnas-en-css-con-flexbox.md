---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVYAUD4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx7bk6BeTj%2FlU3wqlkXT331YuM0hAnrvV4%2F9jvt2FAVAiEAjVCqSQZsL%2FYMBv5x9gOPMsDgP8FCiNecmq%2FypdiOfOUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEnBbD1f7cWAn%2BI5ircA7m1OBbw4UZ%2BwRqYY6kQq%2F9f5BpDSokLBtyXPcEoLM5wsODeMiMv4fZep5I3L%2F92e3L8CFibhBRVs9P25yYOqVH9FNrvab1atkXLON1G%2BLsw65AoPpkveEwrtrD2Uk3p%2FEnWlZW0jcH3hGJborTuZAHe59r1PxTsfrUhkfabdF6pZhVIOFLPLRQJsjV3r3crdycsKFMd4hwcLCtDocvBnjF%2F0jh5OroiwvDD9JIMwklGEEFUMi9PmQbA3ixMRh4mh1GDGK2PQjIpXojVgrtOxmXjLMVTmpmCRkmzgqcRMtZTV%2BRRdBPVStMowCGsuYI2PonhVb5Usa%2F2oILAT9xAZ4dIJmjLCjvlTNy8QR5cGBjB1d%2B8bwfChoN8EK1HLoGwb9mpQyikg7l4i79LhnfIprJmXe8Z0cPn%2BOR%2FZCSmicZ7vZ9VaGpiNBN6vPBpNlweOhJhVeyByF%2FWFzaQkcvUbGgs4O%2B8HXYrH1GgVpdxzaZvQb5alVPvXZUqJmVbSrLRTONxV20Oj8WRqi%2Fgzf1LFKUJvowR4StpqjxB68jBpSQ5jxQKQbctbU8TnhoK7GVT4j2oHlYRUtyL0eY0Zy9dG8RL5bmxa8b%2F5KtSUJwALdZDLsGztHLmwhlWRu4mMOTl3skGOqUB4A%2FXB5AQo%2Bpvsm%2FicGn4dxImqbXcfX8GPJk82Q6H1lUNX33v8J6yecSs%2FrAurGab%2FRQ9WVCCIs2GqxneHfdIABrFFd%2BnYnb5nJB2003ichudqWVesQp6HU0ZWMaStzblmKptfHzoLz%2BWN7eAIhCS8b8IcV4u%2B%2FhtnTyvhMr6PVv%2BO6UujGgD1s%2B1PT5t7lCWNRd%2BmXec3mE%2Bej%2BFzCs0%2F3SDCe8A&X-Amz-Signature=de98515640f12b56ab7632585f30919a8bf4f0d3b07ab2c9fb7715e7e1e4b32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXVYAUD4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx7bk6BeTj%2FlU3wqlkXT331YuM0hAnrvV4%2F9jvt2FAVAiEAjVCqSQZsL%2FYMBv5x9gOPMsDgP8FCiNecmq%2FypdiOfOUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEnBbD1f7cWAn%2BI5ircA7m1OBbw4UZ%2BwRqYY6kQq%2F9f5BpDSokLBtyXPcEoLM5wsODeMiMv4fZep5I3L%2F92e3L8CFibhBRVs9P25yYOqVH9FNrvab1atkXLON1G%2BLsw65AoPpkveEwrtrD2Uk3p%2FEnWlZW0jcH3hGJborTuZAHe59r1PxTsfrUhkfabdF6pZhVIOFLPLRQJsjV3r3crdycsKFMd4hwcLCtDocvBnjF%2F0jh5OroiwvDD9JIMwklGEEFUMi9PmQbA3ixMRh4mh1GDGK2PQjIpXojVgrtOxmXjLMVTmpmCRkmzgqcRMtZTV%2BRRdBPVStMowCGsuYI2PonhVb5Usa%2F2oILAT9xAZ4dIJmjLCjvlTNy8QR5cGBjB1d%2B8bwfChoN8EK1HLoGwb9mpQyikg7l4i79LhnfIprJmXe8Z0cPn%2BOR%2FZCSmicZ7vZ9VaGpiNBN6vPBpNlweOhJhVeyByF%2FWFzaQkcvUbGgs4O%2B8HXYrH1GgVpdxzaZvQb5alVPvXZUqJmVbSrLRTONxV20Oj8WRqi%2Fgzf1LFKUJvowR4StpqjxB68jBpSQ5jxQKQbctbU8TnhoK7GVT4j2oHlYRUtyL0eY0Zy9dG8RL5bmxa8b%2F5KtSUJwALdZDLsGztHLmwhlWRu4mMOTl3skGOqUB4A%2FXB5AQo%2Bpvsm%2FicGn4dxImqbXcfX8GPJk82Q6H1lUNX33v8J6yecSs%2FrAurGab%2FRQ9WVCCIs2GqxneHfdIABrFFd%2BnYnb5nJB2003ichudqWVesQp6HU0ZWMaStzblmKptfHzoLz%2BWN7eAIhCS8b8IcV4u%2B%2FhtnTyvhMr6PVv%2BO6UujGgD1s%2B1PT5t7lCWNRd%2BmXec3mE%2Bej%2BFzCs0%2F3SDCe8A&X-Amz-Signature=c54e34bce6c104cfa348a40e50a56ee6090991dcdbd01db4f5ce866d9bb03e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

