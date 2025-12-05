---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XQZA6L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkeWsq6W03H2EqcRIbyygEMwJJlXKocLlixV1se9M63AiEA9%2BCUrxn16CtbOk0ecrAu93ny0WkDFfZWKdpigT%2FhS4Iq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDkZ47zQdaG8VESsIyrcAyd7u6YKBwJxf23CBkQAP60G%2F27zvNQV9hqIVPAHFjEVXbAtoFhAjPlrgQPkEUExjXFTdaab3aEsqrKi5GM39WCB2W4bIHD7c4EVWkwmffn6BCOuZSayOAaoRcJutpaat77Mcqf9xKPbEcEGdXpmg2wKnRKcLW6SftZfyDmRRtPK7%2FLwEyE%2Bsydf4p30KnF92PWR%2FecIwaYpUUMJETVrtPyt%2BhIA2yz8TxhcTLw9vDagPSTRo6RCfg8FhpQTjR1aj47W5pAv4y5EjzKLiu6EU5mpCS%2BQBuWBtKFrv72lQlXytCeGbWi5uetA49GZ6IZC5Qxjo1fAF65HM2cOrrS6yrit7dJ2bvPuUDhiMprMZDaJtdicRqyv9q%2BiHFwHBmnFwjr9%2FuFXEnNBBw2zT93VorCA8vsag77v1ItU0zqCCRkSq9N8%2BsmngatiH2HD78fnENir4%2BAVv%2BIO6ppfZfUb34TpRxX8dDjKWB1QC9Wf9o2OwYWpMfGojBNuo6xxpDGhDGWe3xuD%2BkaJ3ZJOzDDZ3m0Xnpo1efPDsWztI1xsWtw49KZXoYfMkOqWrqXAAuhET3EpaBilHiL4b5ulXIZcxQE52%2BqkVSZtaGSqaUOnu7vYtAz8WNGtOx1E5o7%2FMKWNzckGOqUBCnHydmclTGTMzoYWtBrQl3986sGAx9HiqJiB7CpgRUl2c%2FMjnvEa4xKkytM%2B9rQFajjiw%2BFBbGuF8afQW6VpHWhJWTPzOmAwID4kYWOs4hqm89FiwF1Sz%2BO9L8JGK2AAXByfAJlCuKRLoEmYVUEYywfCM7yqZZxfVnp8tqDxwn%2FuE2j0QEoACMr7WYc9Y3pbm9DbcycLjo%2BSpjc0R4krjZp6Cs%2B0&X-Amz-Signature=11dfda27ba1a8fa180258c7dc3c507c5afc28a203099814fd75a7f434bce82e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XQZA6L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkeWsq6W03H2EqcRIbyygEMwJJlXKocLlixV1se9M63AiEA9%2BCUrxn16CtbOk0ecrAu93ny0WkDFfZWKdpigT%2FhS4Iq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDDkZ47zQdaG8VESsIyrcAyd7u6YKBwJxf23CBkQAP60G%2F27zvNQV9hqIVPAHFjEVXbAtoFhAjPlrgQPkEUExjXFTdaab3aEsqrKi5GM39WCB2W4bIHD7c4EVWkwmffn6BCOuZSayOAaoRcJutpaat77Mcqf9xKPbEcEGdXpmg2wKnRKcLW6SftZfyDmRRtPK7%2FLwEyE%2Bsydf4p30KnF92PWR%2FecIwaYpUUMJETVrtPyt%2BhIA2yz8TxhcTLw9vDagPSTRo6RCfg8FhpQTjR1aj47W5pAv4y5EjzKLiu6EU5mpCS%2BQBuWBtKFrv72lQlXytCeGbWi5uetA49GZ6IZC5Qxjo1fAF65HM2cOrrS6yrit7dJ2bvPuUDhiMprMZDaJtdicRqyv9q%2BiHFwHBmnFwjr9%2FuFXEnNBBw2zT93VorCA8vsag77v1ItU0zqCCRkSq9N8%2BsmngatiH2HD78fnENir4%2BAVv%2BIO6ppfZfUb34TpRxX8dDjKWB1QC9Wf9o2OwYWpMfGojBNuo6xxpDGhDGWe3xuD%2BkaJ3ZJOzDDZ3m0Xnpo1efPDsWztI1xsWtw49KZXoYfMkOqWrqXAAuhET3EpaBilHiL4b5ulXIZcxQE52%2BqkVSZtaGSqaUOnu7vYtAz8WNGtOx1E5o7%2FMKWNzckGOqUBCnHydmclTGTMzoYWtBrQl3986sGAx9HiqJiB7CpgRUl2c%2FMjnvEa4xKkytM%2B9rQFajjiw%2BFBbGuF8afQW6VpHWhJWTPzOmAwID4kYWOs4hqm89FiwF1Sz%2BO9L8JGK2AAXByfAJlCuKRLoEmYVUEYywfCM7yqZZxfVnp8tqDxwn%2FuE2j0QEoACMr7WYc9Y3pbm9DbcycLjo%2BSpjc0R4krjZp6Cs%2B0&X-Amz-Signature=7027b294d1f33b5c32e4245a67cbc618fac905f1602aad7a4dc451e8ee8dd56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

