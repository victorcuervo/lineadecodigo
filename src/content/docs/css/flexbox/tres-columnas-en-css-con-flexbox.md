---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT22SXU5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpnEB4jmPLFF%2BqllEzFwKOfTHzLFoXVWhSSEBjW%2FzQ3AiEAz4FEsT7TFLtaW%2Bn5cMl7H4IqbmmtNHeUjL3AYwXle50qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5OsNT3e0pkM2ixgircA3Vm%2FuMmGPBbWa4uAAEMz4%2BEIDeCD3iXbJ7v0PgRjzKSOhiVsCD3BZMhqEB9CFXmz7GLf6PAc8AVQw32LW%2FwPRD9MJktQ06wwlc4JyRlNlCllXMPowy7f5MN%2BUcI6mKxFmUT8SMEsWngaR3%2BiBUok7OZYh5D1OD3q1%2F0O2w9b4NPZ1YXm9WNhW5xQ5PH9PjiJUMox50mNSFeUDVgcKJYa2CaECk%2FMUrvdIwjO3qDTBk9ySHB0uiPMMaVV8UN6DUAgjXQVEKUBzsNSpRcuCrLLVDoovTuSrU5zb%2BblfG6pdHQd9R%2FzBUsEZbwn56JzGmiF%2BdhiZ9DA4cGk7VvyqB1%2FpQLrmFlo5Zzp1GIFW64aJDap4BKIrPwudyfjfdTroobVd3q6XmnahkNCdU4rtHrgQS8HmUzFL3VW6zk6xX2DB04dO%2FuE46u6ehIEun17YCI8mgZbp%2FTEA4v1KrOHcrbtvCPD%2Fy%2B%2F8NthOuaw1ejJwUGwlvRr0paMEFBcZ0ilOsXuk2V8LViA8RUvIATA1%2BUPMP5EBL%2FVhe3WK4ihYad%2BRYfsvguLWDrn7mfMjWTDskkJnPYSML7PAbaorjQZ9LYabCHsseu1Sgbi%2BQAdEb3WmADnm3ZKq6jPo%2BXDwSoMMCQ3skGOqUBO98p%2B%2F%2FsCKDg%2BRGHU%2BtmVNjLQ2G35GAAhMj%2B2HpCIavMyMe5d8t%2FcmZkJ025dLlOZHkON9UicxraPA%2FMUBdAdwYUNMJS54quDpLdSiIm9V9hoy%2F2ES%2F9gtCRmZYBVvllexXkO8KNNhGMgSkHVhUZDTHZr%2Bt41USXnB3c%2FbQ2NPYWDmrh9WCvetJWVyv9mpuqyNXq%2B7NYzSDHlFXt9c3gTuzLcORP&X-Amz-Signature=7f01297232564588120384833bf1a22da3f33e19408acb5e9ef671c72247fc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT22SXU5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpnEB4jmPLFF%2BqllEzFwKOfTHzLFoXVWhSSEBjW%2FzQ3AiEAz4FEsT7TFLtaW%2Bn5cMl7H4IqbmmtNHeUjL3AYwXle50qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5OsNT3e0pkM2ixgircA3Vm%2FuMmGPBbWa4uAAEMz4%2BEIDeCD3iXbJ7v0PgRjzKSOhiVsCD3BZMhqEB9CFXmz7GLf6PAc8AVQw32LW%2FwPRD9MJktQ06wwlc4JyRlNlCllXMPowy7f5MN%2BUcI6mKxFmUT8SMEsWngaR3%2BiBUok7OZYh5D1OD3q1%2F0O2w9b4NPZ1YXm9WNhW5xQ5PH9PjiJUMox50mNSFeUDVgcKJYa2CaECk%2FMUrvdIwjO3qDTBk9ySHB0uiPMMaVV8UN6DUAgjXQVEKUBzsNSpRcuCrLLVDoovTuSrU5zb%2BblfG6pdHQd9R%2FzBUsEZbwn56JzGmiF%2BdhiZ9DA4cGk7VvyqB1%2FpQLrmFlo5Zzp1GIFW64aJDap4BKIrPwudyfjfdTroobVd3q6XmnahkNCdU4rtHrgQS8HmUzFL3VW6zk6xX2DB04dO%2FuE46u6ehIEun17YCI8mgZbp%2FTEA4v1KrOHcrbtvCPD%2Fy%2B%2F8NthOuaw1ejJwUGwlvRr0paMEFBcZ0ilOsXuk2V8LViA8RUvIATA1%2BUPMP5EBL%2FVhe3WK4ihYad%2BRYfsvguLWDrn7mfMjWTDskkJnPYSML7PAbaorjQZ9LYabCHsseu1Sgbi%2BQAdEb3WmADnm3ZKq6jPo%2BXDwSoMMCQ3skGOqUBO98p%2B%2F%2FsCKDg%2BRGHU%2BtmVNjLQ2G35GAAhMj%2B2HpCIavMyMe5d8t%2FcmZkJ025dLlOZHkON9UicxraPA%2FMUBdAdwYUNMJS54quDpLdSiIm9V9hoy%2F2ES%2F9gtCRmZYBVvllexXkO8KNNhGMgSkHVhUZDTHZr%2Bt41USXnB3c%2FbQ2NPYWDmrh9WCvetJWVyv9mpuqyNXq%2B7NYzSDHlFXt9c3gTuzLcORP&X-Amz-Signature=46e3ced6ad08ffb26f537ed831637a9b3ad00c574da20dfea635400803e90fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

