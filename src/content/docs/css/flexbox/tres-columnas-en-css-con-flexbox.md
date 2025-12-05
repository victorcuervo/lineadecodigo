---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZO4QM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCri3MC9na31%2FD%2F1rwfFwrX5rl08xtJGczGUQKCMxbXCAIgH23U89IbqWghnWFQeFxBrfC62WAOGFrFx6YmakiKV3Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLpOtgO%2BCJLBTYs3nCrcA7S5rHyZtcsyEit9hlA6PoKmsAPip6OcHoB6NTa2J8DUMXlgcYl1Dogsy7uy%2Bsm4rN2wNfpI6vSkMxiuFH4YfQdww7DQbSwhJk5oQs1iLyU7xME4KXICavIlKbA8GsoQnkWbq3FyNRTy8PgVUQuCNgAzvUV3wAsibuedyzTxjjtd5XuehnBohJaIx2JrS7PLtKsULncPWue%2B%2Bq%2Bwvv98Ji5OqrJ0yEUERA2N3XEsw6%2BMWscDC96IFtEgCw9THI3S3JQjWs9dxYmkAbLQbEtqC6Jue83IBPS%2FmixpKmoekPgkrzNh304TRhTG69cv0k9sKoiVcA%2B3PduWOWVjQ7U5JYOhaPRrSAqslB6YsXg9WAl0jLBuGK7EuyYMPIdR8myGsvKM49wIftMzbHg28Zap4uV8qbkJKY4K1O3CQaU9rSwGWIOkv7jUZNYJJ%2BJDsvo743lncaKpB5iih5B4bj2t4hiaTF0ULDGCHb0wbNnWSL6J8f55%2Fr5%2FhmpnUhe%2Fx4HJBADE1fARsievixObxPUNb2g023C%2BjFeKNw8MdnD2LX16ghFCd5ZFPWHIGPrDEHYKYDrZdhGKvwL2qSpiP0GCu1sHssODFvi6NaPaspAIxPyuZoCXDveWOspLGdlUMO%2FNyskGOqUBL%2BtlWY9WXMxzdc6gYpQNSKyBLeRKjfHPh71xbvNu5DuEVZoJ6fASYXUsT9%2Bwef%2BL9Mb54voLgSHXsg5endxKPeveASsx0z9w%2FT%2FS9Do%2BtLcfn5iM%2BYuU9bKztCyADy539FKEtX75IsogzlmE6ZyAkp%2B6NT2jfnXTozblUDouJvnhgfeQfabRLqZzWkWPzWn04rZk0rvAfHb0AbDW1qqTHjBRkDXc&X-Amz-Signature=36315a72617282a74c90fc6f8a5057f940eaff8171cca85c1b502235bbf04642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZO4QM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCri3MC9na31%2FD%2F1rwfFwrX5rl08xtJGczGUQKCMxbXCAIgH23U89IbqWghnWFQeFxBrfC62WAOGFrFx6YmakiKV3Mq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLpOtgO%2BCJLBTYs3nCrcA7S5rHyZtcsyEit9hlA6PoKmsAPip6OcHoB6NTa2J8DUMXlgcYl1Dogsy7uy%2Bsm4rN2wNfpI6vSkMxiuFH4YfQdww7DQbSwhJk5oQs1iLyU7xME4KXICavIlKbA8GsoQnkWbq3FyNRTy8PgVUQuCNgAzvUV3wAsibuedyzTxjjtd5XuehnBohJaIx2JrS7PLtKsULncPWue%2B%2Bq%2Bwvv98Ji5OqrJ0yEUERA2N3XEsw6%2BMWscDC96IFtEgCw9THI3S3JQjWs9dxYmkAbLQbEtqC6Jue83IBPS%2FmixpKmoekPgkrzNh304TRhTG69cv0k9sKoiVcA%2B3PduWOWVjQ7U5JYOhaPRrSAqslB6YsXg9WAl0jLBuGK7EuyYMPIdR8myGsvKM49wIftMzbHg28Zap4uV8qbkJKY4K1O3CQaU9rSwGWIOkv7jUZNYJJ%2BJDsvo743lncaKpB5iih5B4bj2t4hiaTF0ULDGCHb0wbNnWSL6J8f55%2Fr5%2FhmpnUhe%2Fx4HJBADE1fARsievixObxPUNb2g023C%2BjFeKNw8MdnD2LX16ghFCd5ZFPWHIGPrDEHYKYDrZdhGKvwL2qSpiP0GCu1sHssODFvi6NaPaspAIxPyuZoCXDveWOspLGdlUMO%2FNyskGOqUBL%2BtlWY9WXMxzdc6gYpQNSKyBLeRKjfHPh71xbvNu5DuEVZoJ6fASYXUsT9%2Bwef%2BL9Mb54voLgSHXsg5endxKPeveASsx0z9w%2FT%2FS9Do%2BtLcfn5iM%2BYuU9bKztCyADy539FKEtX75IsogzlmE6ZyAkp%2B6NT2jfnXTozblUDouJvnhgfeQfabRLqZzWkWPzWn04rZk0rvAfHb0AbDW1qqTHjBRkDXc&X-Amz-Signature=bcac9b6f5682bfe34754d038b764216f51175b0625777f848df13715ea1c7dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

