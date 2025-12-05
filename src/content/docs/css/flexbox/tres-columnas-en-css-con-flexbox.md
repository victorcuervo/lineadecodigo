---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPPHKBX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBf0MLEEtRQRKptrTRiZ24Chv3pPQbBA8taL6gMetZqAiEA%2BJmHnoJQiLsXoOWs9KSRGJN4wbq%2BgOTZo1gLRQvo7agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuLVYgV0jlhyPdB%2FCrcA5BgzySt6%2BK6V7Mmmkj3Z%2BVepVjEVu8Q6bRhq6%2BwITMhdscFjA7IuVCKfv8rE8YLlhlP3rVRYU6oFj3Zqod6anoeS43vI4PzjnluZiMcBpHiXMidJ5EokyisUwEHnNW34rgOUK2iVt%2FHxPlLAD7CMqfw3P3%2FWIZlApGGrpUE0pbosZldDSel2LsEoz5NZrgWpAFgQXdC6VJrn%2BW2ZnCGVxuyTEaKPWpJmE2x3EhJjdaOxse6lgrtUEhZNqCowA%2BS4pqKypJT10Hibfhcj5VaiA4g%2Bxp1Etygt8XYVL2NeUkpbBAf31lp5LFyqV665qHPxLd0aUX4lu%2BAfVG24Fsg5Al3XvOZHESSGD%2BzvTpjpaqnjMFLtgG6xlmh7n4cRUxb2Nb%2FxtTXUB8HKiADc5yblHmuKhbmzMUiHGHcmUpyCn12nREF4aVzX1ujjIps5hTzZNyoHW3%2FKB1TCVARFR0y3NAv16BCQRS61IxpSAdmsnTclTPJK9BjV8o22HPOBzLTQK6zNnfVnQNNAaTlRNcQg%2F5deJ6WAY9h7%2BF60ArY%2FevtpPMf%2BiUnU7A%2Fs514csd4znh%2Bn6T5ODROAtN07fnIHJ98Y05KiI9983bJ4dIUFEpjCRV%2BHDEGqVV0dR5qMMzty8kGOqUB%2BKGxoc7TlJgM7Qs1F9E6JHeRCiXLmb%2B%2Fz%2BhJt6tlWt3ycVyzW0as1%2Fp8mVSZoNaZvb%2BgCAiSj95WofSabMKD8O5jL%2BsVwHOL5eZ%2F34umuSu%2BUTwMJUkdPFasWZAzLfhcfsMM5vdY5yrcDY%2B9BDaHfjz9wyOQcwpUTJmCSiWyNFoR9G3GPAlQHBwSan6kq0flEBRXg07isMobwKC%2FBhhyXpwaMKo9&X-Amz-Signature=c448183678f8c0941656ab1c275204affa6ae3ea55127b31deb98e919434387d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPPHKBX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBf0MLEEtRQRKptrTRiZ24Chv3pPQbBA8taL6gMetZqAiEA%2BJmHnoJQiLsXoOWs9KSRGJN4wbq%2BgOTZo1gLRQvo7agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuLVYgV0jlhyPdB%2FCrcA5BgzySt6%2BK6V7Mmmkj3Z%2BVepVjEVu8Q6bRhq6%2BwITMhdscFjA7IuVCKfv8rE8YLlhlP3rVRYU6oFj3Zqod6anoeS43vI4PzjnluZiMcBpHiXMidJ5EokyisUwEHnNW34rgOUK2iVt%2FHxPlLAD7CMqfw3P3%2FWIZlApGGrpUE0pbosZldDSel2LsEoz5NZrgWpAFgQXdC6VJrn%2BW2ZnCGVxuyTEaKPWpJmE2x3EhJjdaOxse6lgrtUEhZNqCowA%2BS4pqKypJT10Hibfhcj5VaiA4g%2Bxp1Etygt8XYVL2NeUkpbBAf31lp5LFyqV665qHPxLd0aUX4lu%2BAfVG24Fsg5Al3XvOZHESSGD%2BzvTpjpaqnjMFLtgG6xlmh7n4cRUxb2Nb%2FxtTXUB8HKiADc5yblHmuKhbmzMUiHGHcmUpyCn12nREF4aVzX1ujjIps5hTzZNyoHW3%2FKB1TCVARFR0y3NAv16BCQRS61IxpSAdmsnTclTPJK9BjV8o22HPOBzLTQK6zNnfVnQNNAaTlRNcQg%2F5deJ6WAY9h7%2BF60ArY%2FevtpPMf%2BiUnU7A%2Fs514csd4znh%2Bn6T5ODROAtN07fnIHJ98Y05KiI9983bJ4dIUFEpjCRV%2BHDEGqVV0dR5qMMzty8kGOqUB%2BKGxoc7TlJgM7Qs1F9E6JHeRCiXLmb%2B%2Fz%2BhJt6tlWt3ycVyzW0as1%2Fp8mVSZoNaZvb%2BgCAiSj95WofSabMKD8O5jL%2BsVwHOL5eZ%2F34umuSu%2BUTwMJUkdPFasWZAzLfhcfsMM5vdY5yrcDY%2B9BDaHfjz9wyOQcwpUTJmCSiWyNFoR9G3GPAlQHBwSan6kq0flEBRXg07isMobwKC%2FBhhyXpwaMKo9&X-Amz-Signature=23de1b078bd9726a9adca0ea028bc7fed6ca5e8be8cb3272c9ee1ad7be6dc287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

