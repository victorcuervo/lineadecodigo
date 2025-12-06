---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JLW5LLY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkc02Vx6b5um03%2FMZDfG8zw2zcBXT4eW2IgyjFmlyhxAiEAzsxHIRfpCg1DkhNRs47Ec96S90xCpkZ2XecTq0tKWVgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFnlJIn4UPhR22pf4CrcA17FTNr1sBMW7VUBefSy7XzhwcCCK3mKOyHMubFQx9WaIJnyU%2FHcjDb3xZiUxLosx9h5a4BJXZKXp0xO5EdAYYlFVKgHiFPprqB1uO3o%2FR4aHflJsePaWRWxgdYtRIN2FecnGMNcIhkoDbASpVGAF0ZvlgLo%2FszjDPMYnV%2F0ilK17VawPRP07E2tb7DTCgYZAENF%2BTwKrWMmpgo343LJHKu1DbMSuJhY3Ltv4qDHSiR0yn%2BpsT6Uk%2FTNv0LkUIE%2F3C5bMdi00uH1SISDkdudsD8yG4sq7KKKeYoriWSpf5I8nfUMlxKkEpBrilqllOhNWlgL1VdLlbc6dP1YzEzaRUl802L2DiTRVYTwqnXSXQ1JhtzEmtwUl%2FKVLcSREpEqCqMfTe256CGUeHB0NWlxU6KF1Fjq%2B2bHXQxYWXs00b0colGy9BvjEWtMGJtpcjyVTZK%2B6gid4UBuN1t2MIzrq5ysVFB9nqpPEKiy6hHvsHDXE8SXNL1iKquPX89Q3aVI1s0qYRXW11SRrqWU8Qjnnoe3kHBHd0gq2YZE3PIO1Y%2FLDy49barkPIQ5yRGR0p1GrqzCuHnP9kDHPk1yrx5UOTbpzMCuvxce74%2BivOvL0nH5S2SxMZps22RYtLlAMKem0MkGOqUBbm0MttUcRVxBXddjpMVMU%2FtQ5RVSPHK%2B%2FYsi8fEs%2Ft1QntrvGy%2F4Bg9318Ed3G535UNlBelqrqFeQ12G4Gx5TXQvhlLM1lPlMoE8F7J%2BKZV1baebOhqTJxMpKrRe2i04iz%2BSiryu%2BhNAj5JwvU1rsOswons54Cde%2BZEa7a782%2Fd5YgieugNob9m3b9c7u71RN7nymb%2BuIs8gwjeiI1Ez9GwQJHnQ&X-Amz-Signature=3e1ac1f35fa73966067edf3989d9e6dca477dc78d641e00e8879d4af45b08429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JLW5LLY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkc02Vx6b5um03%2FMZDfG8zw2zcBXT4eW2IgyjFmlyhxAiEAzsxHIRfpCg1DkhNRs47Ec96S90xCpkZ2XecTq0tKWVgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFnlJIn4UPhR22pf4CrcA17FTNr1sBMW7VUBefSy7XzhwcCCK3mKOyHMubFQx9WaIJnyU%2FHcjDb3xZiUxLosx9h5a4BJXZKXp0xO5EdAYYlFVKgHiFPprqB1uO3o%2FR4aHflJsePaWRWxgdYtRIN2FecnGMNcIhkoDbASpVGAF0ZvlgLo%2FszjDPMYnV%2F0ilK17VawPRP07E2tb7DTCgYZAENF%2BTwKrWMmpgo343LJHKu1DbMSuJhY3Ltv4qDHSiR0yn%2BpsT6Uk%2FTNv0LkUIE%2F3C5bMdi00uH1SISDkdudsD8yG4sq7KKKeYoriWSpf5I8nfUMlxKkEpBrilqllOhNWlgL1VdLlbc6dP1YzEzaRUl802L2DiTRVYTwqnXSXQ1JhtzEmtwUl%2FKVLcSREpEqCqMfTe256CGUeHB0NWlxU6KF1Fjq%2B2bHXQxYWXs00b0colGy9BvjEWtMGJtpcjyVTZK%2B6gid4UBuN1t2MIzrq5ysVFB9nqpPEKiy6hHvsHDXE8SXNL1iKquPX89Q3aVI1s0qYRXW11SRrqWU8Qjnnoe3kHBHd0gq2YZE3PIO1Y%2FLDy49barkPIQ5yRGR0p1GrqzCuHnP9kDHPk1yrx5UOTbpzMCuvxce74%2BivOvL0nH5S2SxMZps22RYtLlAMKem0MkGOqUBbm0MttUcRVxBXddjpMVMU%2FtQ5RVSPHK%2B%2FYsi8fEs%2Ft1QntrvGy%2F4Bg9318Ed3G535UNlBelqrqFeQ12G4Gx5TXQvhlLM1lPlMoE8F7J%2BKZV1baebOhqTJxMpKrRe2i04iz%2BSiryu%2BhNAj5JwvU1rsOswons54Cde%2BZEa7a782%2Fd5YgieugNob9m3b9c7u71RN7nymb%2BuIs8gwjeiI1Ez9GwQJHnQ&X-Amz-Signature=e0ac5ee4eee66c112a61daddd10060a35721356c13086d390509ce78ea9a7fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

