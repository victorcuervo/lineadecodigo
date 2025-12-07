---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3DQOYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpvkfRZN%2FmpNq9BFG5aj5vJiwi4aIqGNmaekGUYZQ9EAiEAnjwlRQO5lObxatYP3pd0CpsPSXEVlsVVoyQ%2FOVH%2FEhoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS%2Bh1Z%2B%2BOgoA5hRtyrcA8XxlYxlmoUuwWLcy4bukdCjBfj1qhRF4Ec0eVSXLnhcKZ8Wp0lIv%2FaJTTAqy4m44I2AkS3OtgObim6XJxD1vBgWKFXNV3TpowknGBbEF%2F%2BGx2UjHQr%2FLtZ7oFpsONqeTTDl%2FkejrtgEsJouAoGPhJIAIuOFFNdxqlK3UUegTquFVD0%2Bl%2BLgefeIlzISs0UkQxxrSgB7YHEo29wQj6nZay2sLtmf8%2BtQOC%2BbpO2Kg42XUj86H3I3wFWX36VNrsRMJGtmFsnVJAXe8dMMwFQNVhznwu20YaIc4vOnr%2Fqea2VoN9L1x5hQ82G3T%2FK3XoRohbTK1Gaoklb8XOypDQzBGarGmDB7D7nB%2FhjkTS%2FUMctH1ihMzoPi%2BupV4b2Fit7FW2V9cSUa%2FPQA6foZxB9shLHZc814Eqpjwk06VyXK9kndhN5veiA6PA8nzrAsiv2uG0BtP6MZ%2FSnEtAmMq1vJ7OZYgOjcm1HbMl5dwR%2Bz9P4tCn90IiyVASz1edbEszP4GQHlBj%2BtfP0UHv2Yd05MdGqsp%2BvnOMucY5e0xSxKkGQMzk1lvi1QYZM1Otyp1vqgjeCSJBUpbUiyCZUlLLOmDhTfaIC2duoXJOEE95wSwXkVII0ynnl7rOjHAtLWMK2Z1ckGOqUBRdowk51T9TNFOYJRMjdW2fQLfodKEPXUPs4OMawuZSyFic30sa0SN%2Bea%2F%2BMkwWxek2GgwTCXsY9vKaOsDYsgdr2O%2BRfkgSxeNr4lu8YfTMjDunpjon2Lf0tF3Uk4UgDgDRd4t57YddB0ZgPT94ENIBQzNw8ltV%2Bp8KyNCPDiQRyS%2FZLX5ptAlqyO13pGnfat1nrPa0B7Pi%2BWUB5ToRBmbgs4oVQC&X-Amz-Signature=eb4ef8536309f92d40ce82a7d8597f007ffa454aa819e675f00db858496284cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3DQOYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpvkfRZN%2FmpNq9BFG5aj5vJiwi4aIqGNmaekGUYZQ9EAiEAnjwlRQO5lObxatYP3pd0CpsPSXEVlsVVoyQ%2FOVH%2FEhoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS%2Bh1Z%2B%2BOgoA5hRtyrcA8XxlYxlmoUuwWLcy4bukdCjBfj1qhRF4Ec0eVSXLnhcKZ8Wp0lIv%2FaJTTAqy4m44I2AkS3OtgObim6XJxD1vBgWKFXNV3TpowknGBbEF%2F%2BGx2UjHQr%2FLtZ7oFpsONqeTTDl%2FkejrtgEsJouAoGPhJIAIuOFFNdxqlK3UUegTquFVD0%2Bl%2BLgefeIlzISs0UkQxxrSgB7YHEo29wQj6nZay2sLtmf8%2BtQOC%2BbpO2Kg42XUj86H3I3wFWX36VNrsRMJGtmFsnVJAXe8dMMwFQNVhznwu20YaIc4vOnr%2Fqea2VoN9L1x5hQ82G3T%2FK3XoRohbTK1Gaoklb8XOypDQzBGarGmDB7D7nB%2FhjkTS%2FUMctH1ihMzoPi%2BupV4b2Fit7FW2V9cSUa%2FPQA6foZxB9shLHZc814Eqpjwk06VyXK9kndhN5veiA6PA8nzrAsiv2uG0BtP6MZ%2FSnEtAmMq1vJ7OZYgOjcm1HbMl5dwR%2Bz9P4tCn90IiyVASz1edbEszP4GQHlBj%2BtfP0UHv2Yd05MdGqsp%2BvnOMucY5e0xSxKkGQMzk1lvi1QYZM1Otyp1vqgjeCSJBUpbUiyCZUlLLOmDhTfaIC2duoXJOEE95wSwXkVII0ynnl7rOjHAtLWMK2Z1ckGOqUBRdowk51T9TNFOYJRMjdW2fQLfodKEPXUPs4OMawuZSyFic30sa0SN%2Bea%2F%2BMkwWxek2GgwTCXsY9vKaOsDYsgdr2O%2BRfkgSxeNr4lu8YfTMjDunpjon2Lf0tF3Uk4UgDgDRd4t57YddB0ZgPT94ENIBQzNw8ltV%2Bp8KyNCPDiQRyS%2FZLX5ptAlqyO13pGnfat1nrPa0B7Pi%2BWUB5ToRBmbgs4oVQC&X-Amz-Signature=3e8c774c53657869e8dd26fa9b08cb0634e659169e06b31f98ceb154bdc29208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

