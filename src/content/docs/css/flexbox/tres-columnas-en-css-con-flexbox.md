---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HGDVKM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRRFRoubMDn9tRTS6wMLzoNzMerAtbkgS1k4d4zCiZcgIgGjVWNgLB1aIGTJLUNH1zSO3xhNRTuOjM%2BlFz2DdjsNQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDgbL050mhTj7Iyb2CrcAyfJf0z0XsqGm%2Bd1Mzq7Wni3GSxUMFQokbFoX1yqtDHciGgc0U8tjWnla0sMR2V9snQ0bKk2XLzdaysj5OiSybcJA%2BvHOPqjh%2FWv%2FcixIuXC9QLtdeP6eF2XWbZSGmAcbRXfaKUtMqEv8W7vnVXjGpbKzkedEteWCQbNix4X4sbXpksNLyjWgBpPgryTG71pOpaVqcoPm5kdSVCDWe67EZh2jutVjH8nINZcTUasdMnM8zRYgtMEd%2FopfS7hgBTP6Ol%2Bh8vhkoxWzhdaVxlps4uU6jTjz0wpicBg4JynljPpGpNE1T%2Bl12S3Pk3HHyZomhMZ84XD%2F0VXd2FrqOHY9KlNCydyxB5Gi1mvHdQQU207wNzlJezbA%2BA64hprMKlws3JUh2s2VbBDH1Rzzp1psO9ftxRETtJvL2IVhk58i0401oL2ngFbNaLAEXhmz8wBf7pYUGOKN080ScAaL96wk8qZvIL5A3pbzG1Of%2FydRLydlp6LapdSrCI%2BBPIM4GXxAe2wDwYkG9BN3JKZdyh%2FBLlIg0n9%2Bo0sAklvpTFMLPVi%2B1I4p1WqGtPwsLaTBlmjVNiscyf3hKgFimEv2rg1O2pZIDBRX%2Bjzb633%2B4PU6h5YrwpDwIdeDX%2BCpnufMPe8z8kGOqUBl8rA7TLMEzMdRJOZZXBF0Tx%2BBAImCagdcQjLs3KzFZTj0PfzOwXkE0W3ufJfqERwGeZ0aOR0RCA9a5pFB2ymD5HnLEV7rr%2FFSlZzCSY%2FK6O%2BEgrnQto2l2xpTCAr6mzNqCnfOCgPZuk2MAK3snh%2BE34U1ELCHpQYmPCU17unXTa7H%2FDFO2419L31I%2Bz6bYzOTmb0jdxaMdHkP2%2BzZuI9JqOxx%2Fpd&X-Amz-Signature=58cd5de813f0eabfd0134d2278923ccce1d768a3ade76bda4a5d28d0e4cc9291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HGDVKM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRRFRoubMDn9tRTS6wMLzoNzMerAtbkgS1k4d4zCiZcgIgGjVWNgLB1aIGTJLUNH1zSO3xhNRTuOjM%2BlFz2DdjsNQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDgbL050mhTj7Iyb2CrcAyfJf0z0XsqGm%2Bd1Mzq7Wni3GSxUMFQokbFoX1yqtDHciGgc0U8tjWnla0sMR2V9snQ0bKk2XLzdaysj5OiSybcJA%2BvHOPqjh%2FWv%2FcixIuXC9QLtdeP6eF2XWbZSGmAcbRXfaKUtMqEv8W7vnVXjGpbKzkedEteWCQbNix4X4sbXpksNLyjWgBpPgryTG71pOpaVqcoPm5kdSVCDWe67EZh2jutVjH8nINZcTUasdMnM8zRYgtMEd%2FopfS7hgBTP6Ol%2Bh8vhkoxWzhdaVxlps4uU6jTjz0wpicBg4JynljPpGpNE1T%2Bl12S3Pk3HHyZomhMZ84XD%2F0VXd2FrqOHY9KlNCydyxB5Gi1mvHdQQU207wNzlJezbA%2BA64hprMKlws3JUh2s2VbBDH1Rzzp1psO9ftxRETtJvL2IVhk58i0401oL2ngFbNaLAEXhmz8wBf7pYUGOKN080ScAaL96wk8qZvIL5A3pbzG1Of%2FydRLydlp6LapdSrCI%2BBPIM4GXxAe2wDwYkG9BN3JKZdyh%2FBLlIg0n9%2Bo0sAklvpTFMLPVi%2B1I4p1WqGtPwsLaTBlmjVNiscyf3hKgFimEv2rg1O2pZIDBRX%2Bjzb633%2B4PU6h5YrwpDwIdeDX%2BCpnufMPe8z8kGOqUBl8rA7TLMEzMdRJOZZXBF0Tx%2BBAImCagdcQjLs3KzFZTj0PfzOwXkE0W3ufJfqERwGeZ0aOR0RCA9a5pFB2ymD5HnLEV7rr%2FFSlZzCSY%2FK6O%2BEgrnQto2l2xpTCAr6mzNqCnfOCgPZuk2MAK3snh%2BE34U1ELCHpQYmPCU17unXTa7H%2FDFO2419L31I%2Bz6bYzOTmb0jdxaMdHkP2%2BzZuI9JqOxx%2Fpd&X-Amz-Signature=7cbed33a745ffa49e23c1b842f9e78732d4ac021363494684ab37b10839453a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

