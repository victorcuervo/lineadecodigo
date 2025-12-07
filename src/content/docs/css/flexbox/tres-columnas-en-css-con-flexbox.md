---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFBO6PS3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE93RqPML0KeOKJuwSMhzOJHGmJtyFXRc%2B8TtOu5BInmAiAVDihJfmsPcENWHUj73cj1a8HMv0L%2BYoW78WKDMqOkxiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9AeeWXHiwlC3G79GKtwDduoaAz41MXswtnfgvpbCEMwMCmHVdSKhS5eyxWAsvSZ5lOyagSgny%2Bh2zrR56fessR7VDIzYi%2FJrgLUK75d79VYS47DENiJxadgZdUIPw0hpUkvEUYK%2BMykA3Xto%2F7fPGlRvcDPTnarkh4EfSxGNB5zHWrp71UIA5D3UNGQfzpF4vQXPbtC8VJEwv9nm8OYrJdAJEnTIDd4HxysC3SIQxXYlEVO%2FQfixmmeb0KC8xmYHNZzKiPgRpiPYmZvO2ALlIPMz2wOTsC94v42aQQ0OCPGQrF9RdqWrxMgeg4tx1BklWYqgwRGoRE1z2fE2oCzilKkQ4RWHPBAiOjZNDqv%2BlcRy4SFyuAJ%2B3RDY8%2B47yDPCwuN77xzl%2BI6zsK6vNanPFA6XhZcqjnBHm5LkdB7avPO71NkOA%2FSkxwhCuxKtavCJSNFWXacIFMqJbymExK0midSCMLnajL7U3U8mSgYgNr6d32iZyea7RPYlghh8IpMfsbuz%2B%2FvKL%2Ftz0f%2BBRYjqOxwI4l4SHHuVWgORvkmCKREJReA0SjlDgIk3CPhV59ZwBhl74ZmwuBM0uzBY1vUqiTlQHVbJBCZ9%2BcgegKubCHl3fl6%2Fw%2BaM4lQ6256IqkGYA5MwtkUf46bzi60wq5%2FUyQY6pgFpqNDc5gPtdaXKSQT%2FiRj4K45y3zq9NDv1uR0YUR%2B3VVCdHzfQRwaMTUiHiQy%2Bn8tc9BgkmhjAZcQ40%2FeqcQ9r%2BEttEc%2FKx7sbtnK4QVUY7rpCa2RJOV4GGbxSfap1W4gq80DIv7PMKFdYrt%2FiPrlLTZuWdpPr%2FLRQHBaAVo20ukJOstCOzpzmxBdnaVPexeFTmg3kdDCAROT1Mg%2F7p4Yd%2BEZJlEjs&X-Amz-Signature=0203db8021227a518ca737fec6ea1045b9f0006c9d7034ca2fd147277bcfcf85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFBO6PS3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE93RqPML0KeOKJuwSMhzOJHGmJtyFXRc%2B8TtOu5BInmAiAVDihJfmsPcENWHUj73cj1a8HMv0L%2BYoW78WKDMqOkxiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9AeeWXHiwlC3G79GKtwDduoaAz41MXswtnfgvpbCEMwMCmHVdSKhS5eyxWAsvSZ5lOyagSgny%2Bh2zrR56fessR7VDIzYi%2FJrgLUK75d79VYS47DENiJxadgZdUIPw0hpUkvEUYK%2BMykA3Xto%2F7fPGlRvcDPTnarkh4EfSxGNB5zHWrp71UIA5D3UNGQfzpF4vQXPbtC8VJEwv9nm8OYrJdAJEnTIDd4HxysC3SIQxXYlEVO%2FQfixmmeb0KC8xmYHNZzKiPgRpiPYmZvO2ALlIPMz2wOTsC94v42aQQ0OCPGQrF9RdqWrxMgeg4tx1BklWYqgwRGoRE1z2fE2oCzilKkQ4RWHPBAiOjZNDqv%2BlcRy4SFyuAJ%2B3RDY8%2B47yDPCwuN77xzl%2BI6zsK6vNanPFA6XhZcqjnBHm5LkdB7avPO71NkOA%2FSkxwhCuxKtavCJSNFWXacIFMqJbymExK0midSCMLnajL7U3U8mSgYgNr6d32iZyea7RPYlghh8IpMfsbuz%2B%2FvKL%2Ftz0f%2BBRYjqOxwI4l4SHHuVWgORvkmCKREJReA0SjlDgIk3CPhV59ZwBhl74ZmwuBM0uzBY1vUqiTlQHVbJBCZ9%2BcgegKubCHl3fl6%2Fw%2BaM4lQ6256IqkGYA5MwtkUf46bzi60wq5%2FUyQY6pgFpqNDc5gPtdaXKSQT%2FiRj4K45y3zq9NDv1uR0YUR%2B3VVCdHzfQRwaMTUiHiQy%2Bn8tc9BgkmhjAZcQ40%2FeqcQ9r%2BEttEc%2FKx7sbtnK4QVUY7rpCa2RJOV4GGbxSfap1W4gq80DIv7PMKFdYrt%2FiPrlLTZuWdpPr%2FLRQHBaAVo20ukJOstCOzpzmxBdnaVPexeFTmg3kdDCAROT1Mg%2F7p4Yd%2BEZJlEjs&X-Amz-Signature=845c0474ada995b1bd6beb3d756a96923da7f7ddf2ebdd4f91a5d24e58f07591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

