---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMGFBKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwYVsrfTDdwWqLVNZWbR19Q16y7Ydx7m3V5tcqnPk0fAiEAvvYO2oMkuU7fL%2BqOta6eUEEe2dWNpU%2FKZQIJ%2Br26LJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOftDzOcvqvTnGAW9CrcA%2BJz3durh%2F9UffG95RvkPzVVc%2FzTbNFOFbaXaYa3ASAc5HoMxtO2YpVPVOso6bYZr4Abw3sI29fhLijiGv7hjjp56MKPBd2Qb%2FpwMobavQA6ITctSZOY7d1%2FnPdRDNSkXEGzWEBFfMRahUElqi6m7qoRxg3%2Fd%2BF1Ji5I1MWK%2BRTaXonYYV%2BQtRVeSUX2E1fTdOgvgNAnosEE7tpKyC4OJWr4%2FrE%2BPuODvr8XV1QD9S2sc4DrYOwK82oAr37h6Sjvp3GnN9bh%2B54c8gEvy68%2FQEsOhjOA9nChcNwYjgNDVjti08%2FDV86oo2oVflK6cyFEFl8OgX2n9deFbEDMVCoUKDl1WsgLTyC71eqL0rmN5apwvsx7J8sS3yYbMP%2Fyw8grXz97KOQ2nzJh2Ttn%2FbrnDxK49J6hNgA6oQAJH2M2u2nhuif7xlvbl3b5%2FfwjbNSOiSMXNC6SlkKfHwbKwiFv8NQSf4qwODEkn3z%2B9R82BSAm7U8TZvWn%2FmYsf7G%2FbLiYjwnG43Ozd1LYjT4WX2yU66qkmHLRBcXnAFvdr2vYSyGXc8wzubnnaL1IeNd7vtlBSc4zMJWdTtdwYkELpN9wLvkROVxC7vkEFM%2FyQChSeM2xbXxFv36QWBmFPuBnMMGe1MkGOqUBY0BLE5K%2F6ospQIFauP60rVULvP42utf1sU83uYogIjMtUEYA7fC5LgKivLp9z6TOX3BAWIMGkPLjSr7SJjzrIl4Ck0OsWtJwtKCpDyIr08B6OVVM7aC%2FruVmuRnC1MoohWRTviTiftNfPTcUceYYC9FTj4WcfiyDM4ORr0u8Zu98WUsZEi1o5jZKkN33ZID21NRmw7TYPiao5YwbGfhnNMx7SmmL&X-Amz-Signature=2114c63997b173770aef0247c2d9d8b6ec50cd64124a38e0596d4cfd8bbdd2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMGFBKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwYVsrfTDdwWqLVNZWbR19Q16y7Ydx7m3V5tcqnPk0fAiEAvvYO2oMkuU7fL%2BqOta6eUEEe2dWNpU%2FKZQIJ%2Br26LJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOftDzOcvqvTnGAW9CrcA%2BJz3durh%2F9UffG95RvkPzVVc%2FzTbNFOFbaXaYa3ASAc5HoMxtO2YpVPVOso6bYZr4Abw3sI29fhLijiGv7hjjp56MKPBd2Qb%2FpwMobavQA6ITctSZOY7d1%2FnPdRDNSkXEGzWEBFfMRahUElqi6m7qoRxg3%2Fd%2BF1Ji5I1MWK%2BRTaXonYYV%2BQtRVeSUX2E1fTdOgvgNAnosEE7tpKyC4OJWr4%2FrE%2BPuODvr8XV1QD9S2sc4DrYOwK82oAr37h6Sjvp3GnN9bh%2B54c8gEvy68%2FQEsOhjOA9nChcNwYjgNDVjti08%2FDV86oo2oVflK6cyFEFl8OgX2n9deFbEDMVCoUKDl1WsgLTyC71eqL0rmN5apwvsx7J8sS3yYbMP%2Fyw8grXz97KOQ2nzJh2Ttn%2FbrnDxK49J6hNgA6oQAJH2M2u2nhuif7xlvbl3b5%2FfwjbNSOiSMXNC6SlkKfHwbKwiFv8NQSf4qwODEkn3z%2B9R82BSAm7U8TZvWn%2FmYsf7G%2FbLiYjwnG43Ozd1LYjT4WX2yU66qkmHLRBcXnAFvdr2vYSyGXc8wzubnnaL1IeNd7vtlBSc4zMJWdTtdwYkELpN9wLvkROVxC7vkEFM%2FyQChSeM2xbXxFv36QWBmFPuBnMMGe1MkGOqUBY0BLE5K%2F6ospQIFauP60rVULvP42utf1sU83uYogIjMtUEYA7fC5LgKivLp9z6TOX3BAWIMGkPLjSr7SJjzrIl4Ck0OsWtJwtKCpDyIr08B6OVVM7aC%2FruVmuRnC1MoohWRTviTiftNfPTcUceYYC9FTj4WcfiyDM4ORr0u8Zu98WUsZEi1o5jZKkN33ZID21NRmw7TYPiao5YwbGfhnNMx7SmmL&X-Amz-Signature=873a22350551e046e858df4474d143e81a4f8a127455a8af63c9fbaadf059954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

