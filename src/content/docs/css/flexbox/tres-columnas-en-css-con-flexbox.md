---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NBKPLEI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOhgTFO9FgeGUnPGovwQMp%2Ff9y9VczHa4cs8XHB9qs2AIgDbvbLOwImaqDkqkcBCRkhWGIgAS8YMEOoD6vTnWJSEUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtydVYaEvRHPZ3OdSrcA9bRwSExNpzflD9vEthc%2FpxgrGtcm8x8zdytXINtaL0%2B%2FBQvU9YDNq7cP9QcFG3ZpVF3Y20v6tGH%2FqEqYacjjqT1Ei8Kzl65i2A31OZkBijsM2qZOlJ9taQ32t2Hl3SFc1BmpHMZZNyKmoMtgL7A0vYt4YdSX4N3Mwnhpftq2z%2BmtyPYl9CUpHnKB3wgatB%2B6T11AM8L%2BxIiV6lpKUZ1O0D7zg5BBHONtIZydv8%2FEQZ8D7K2poqK7kDGjT6FdG1cQJ39PwdwcYHX31%2BD5h3dGykVkjhU9wwD2sobF7vDZuDYBCd8RG8OBDFslmRr%2BnPDaUoFZRk%2Bi4l78%2F0fFK53k12ekHQAPlmZjddNYRBghJs0xw9fxTbUS19rg5xQPlA4QkzAiHJYpBUKS60NfsZe6XDzjEclPXHey5z45t2lKbQlb6ge%2FTV1LXNxb4gXC9NgZdq4glVp2nrYexOW88GYtvMRisDVEXbHvp%2BRK3pMNlXWupd9cQdpl2ApysapK2CGcWBHIgis9XyMduUlFhn4HbwS%2B%2F%2BO%2B42aY%2BvaCdpDpfDP8170%2FUWlspHSfmf8RJCf%2BoL1w5mesBW7%2Fa4%2FPgrDe38YfrdfJKTDkfXMY9JK%2F5sJ4EA7aeEcLhoEbjYtMOno3ckGOqUBZy2BGp81VTfPVf7QDBrbCdnuxC1NTQxC4FNQVQT5Q1Eox1oO9JYkZztgfvgITsCfp3T%2BJjTUK0lMGTroOemFO7gMBgkS1cdIYUDEiz9jSdwgEHfwWooNE%2FmA1sIutxh9WJZoFLJ3fF1LofqgL6NVDXY3ul5fp3QjWwMvMLwaRD4DDjfn4nkdqRZys4UAVqswYnVqF6z0O2Z4pVZlZItxfYdK4Ose&X-Amz-Signature=0af38377cc11f5c850a511a3ae9e6236440246d766c3dc64d246efe256715126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NBKPLEI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOhgTFO9FgeGUnPGovwQMp%2Ff9y9VczHa4cs8XHB9qs2AIgDbvbLOwImaqDkqkcBCRkhWGIgAS8YMEOoD6vTnWJSEUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtydVYaEvRHPZ3OdSrcA9bRwSExNpzflD9vEthc%2FpxgrGtcm8x8zdytXINtaL0%2B%2FBQvU9YDNq7cP9QcFG3ZpVF3Y20v6tGH%2FqEqYacjjqT1Ei8Kzl65i2A31OZkBijsM2qZOlJ9taQ32t2Hl3SFc1BmpHMZZNyKmoMtgL7A0vYt4YdSX4N3Mwnhpftq2z%2BmtyPYl9CUpHnKB3wgatB%2B6T11AM8L%2BxIiV6lpKUZ1O0D7zg5BBHONtIZydv8%2FEQZ8D7K2poqK7kDGjT6FdG1cQJ39PwdwcYHX31%2BD5h3dGykVkjhU9wwD2sobF7vDZuDYBCd8RG8OBDFslmRr%2BnPDaUoFZRk%2Bi4l78%2F0fFK53k12ekHQAPlmZjddNYRBghJs0xw9fxTbUS19rg5xQPlA4QkzAiHJYpBUKS60NfsZe6XDzjEclPXHey5z45t2lKbQlb6ge%2FTV1LXNxb4gXC9NgZdq4glVp2nrYexOW88GYtvMRisDVEXbHvp%2BRK3pMNlXWupd9cQdpl2ApysapK2CGcWBHIgis9XyMduUlFhn4HbwS%2B%2F%2BO%2B42aY%2BvaCdpDpfDP8170%2FUWlspHSfmf8RJCf%2BoL1w5mesBW7%2Fa4%2FPgrDe38YfrdfJKTDkfXMY9JK%2F5sJ4EA7aeEcLhoEbjYtMOno3ckGOqUBZy2BGp81VTfPVf7QDBrbCdnuxC1NTQxC4FNQVQT5Q1Eox1oO9JYkZztgfvgITsCfp3T%2BJjTUK0lMGTroOemFO7gMBgkS1cdIYUDEiz9jSdwgEHfwWooNE%2FmA1sIutxh9WJZoFLJ3fF1LofqgL6NVDXY3ul5fp3QjWwMvMLwaRD4DDjfn4nkdqRZys4UAVqswYnVqF6z0O2Z4pVZlZItxfYdK4Ose&X-Amz-Signature=0d037b437c9df85c8d39cc57a04d5603bc1372e0f2673d429ae399164085f91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

