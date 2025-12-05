---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4X3IIS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPeZlLk%2FWKhO6K8P7uVEnSDKNjAvRdGm48QfBnZrizWQIgZC%2FHgXTSv5L8FWvkswK4WHwXYDqSNvp4pc%2FGjPZHFjsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNvVm3VR%2Fqq4EJLAeyrcA2smGwqplNs3%2BNahlR4drUkd%2Bs%2BS90yoF444uDRlharb4iF5caOyrFci7elBxtk6iMrIBdbuBs3p6gNwu7WpacaoyUH3p%2BDsxRA7Mjly63LEnmpwu%2F3I0pOCT2Iguj5WDqZfqRb6BR227mdQJZCY0uGkUTjaLQwOGYi4M3%2FWfSfnfYMJqrczdjZt2WGeysoT1kQPu0CbEpEl1QxkyRVeN7g2IQ40QTpH7MtxRVSdENzvzi87w5q48D8uXQKF%2Fx2ulSC0WQ8I0P3CLw0y3FcR%2BqrXoDKUjOCzVqgWHMHek3%2FzMJERVYA7EeIVbXh3rLp7%2BL%2Bj2%2B7158Q%2F74l6D28E29wYtuiXtOPBtBiEod4v1Yoo8UhvyWR8zXr7wGkEIAkRHy0rkKV68H1h4BPvNylbTrFAEUu%2FqolZcomDdiAinApGml7Y9AmdGrVwCK%2FDbqTBHjru3OWBluM75Bv5V%2FwyQzwJHRtlYED%2FSR8a3KJuHAmdrHgL1rTnf2opAfsQN1KVKOdjOA%2FH8vivBJKJFYUhe%2FC%2Faq4s2GBI8iInp9b%2B2kMrdaTTu57KZjbsXbLIHwtRsW3U9CBON0jFszaGNxVNPmVLqNvanNCcmEptbX%2FFxRurAO5itQbDziJmPh%2BDMJPPyskGOqUBK1gulHb8pPFjfXiFhkm0gq8PVIyLdVXvo%2FTpwYvC0wf4k0XpKUHDXYOTZNZ%2BNo1mSnueRvskyfFhHdpEeSuVAy607CohyOhkI0m5WyJJp8mNva58E8yoQFZYvO4cKfqzMU7cZ3pAQFmydZbPjmaD5lOKuCVgcMii2gpJU4tccukysi6UEREzC1TGpEtDs0SdbRt3lj1qSRQ7bVks4rOZ3J%2FKtfbS&X-Amz-Signature=222262eed5eef7caf3bc11bbbcbc69a6c16c0524649d0b4f9a14aee7eaa0bb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4X3IIS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPeZlLk%2FWKhO6K8P7uVEnSDKNjAvRdGm48QfBnZrizWQIgZC%2FHgXTSv5L8FWvkswK4WHwXYDqSNvp4pc%2FGjPZHFjsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNvVm3VR%2Fqq4EJLAeyrcA2smGwqplNs3%2BNahlR4drUkd%2Bs%2BS90yoF444uDRlharb4iF5caOyrFci7elBxtk6iMrIBdbuBs3p6gNwu7WpacaoyUH3p%2BDsxRA7Mjly63LEnmpwu%2F3I0pOCT2Iguj5WDqZfqRb6BR227mdQJZCY0uGkUTjaLQwOGYi4M3%2FWfSfnfYMJqrczdjZt2WGeysoT1kQPu0CbEpEl1QxkyRVeN7g2IQ40QTpH7MtxRVSdENzvzi87w5q48D8uXQKF%2Fx2ulSC0WQ8I0P3CLw0y3FcR%2BqrXoDKUjOCzVqgWHMHek3%2FzMJERVYA7EeIVbXh3rLp7%2BL%2Bj2%2B7158Q%2F74l6D28E29wYtuiXtOPBtBiEod4v1Yoo8UhvyWR8zXr7wGkEIAkRHy0rkKV68H1h4BPvNylbTrFAEUu%2FqolZcomDdiAinApGml7Y9AmdGrVwCK%2FDbqTBHjru3OWBluM75Bv5V%2FwyQzwJHRtlYED%2FSR8a3KJuHAmdrHgL1rTnf2opAfsQN1KVKOdjOA%2FH8vivBJKJFYUhe%2FC%2Faq4s2GBI8iInp9b%2B2kMrdaTTu57KZjbsXbLIHwtRsW3U9CBON0jFszaGNxVNPmVLqNvanNCcmEptbX%2FFxRurAO5itQbDziJmPh%2BDMJPPyskGOqUBK1gulHb8pPFjfXiFhkm0gq8PVIyLdVXvo%2FTpwYvC0wf4k0XpKUHDXYOTZNZ%2BNo1mSnueRvskyfFhHdpEeSuVAy607CohyOhkI0m5WyJJp8mNva58E8yoQFZYvO4cKfqzMU7cZ3pAQFmydZbPjmaD5lOKuCVgcMii2gpJU4tccukysi6UEREzC1TGpEtDs0SdbRt3lj1qSRQ7bVks4rOZ3J%2FKtfbS&X-Amz-Signature=fe2a9f04212772992d5674933df678e9b3d273646814987318877a4f816a2b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

