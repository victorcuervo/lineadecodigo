---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46QHFSY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmdOxp2GZQmBVg86uZQ8K7viJDrkLPeKCKeYDRhUhDgIgdHFymfoq99LE3GvXd1tEaFTZNDJigjFTZI8ofsZXYnkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTwL8dESS0eUrKYjCrcA7tSb7LNG2JIldmxby02jKS%2Ft%2F6PbV4wbZKdfGEdjiuFjyoCSFe0fdWOdg9XwwY8xqhbn5%2Ff2i9hjMDWX2%2Bhlrdhaq0u%2FvQBGtjMPN%2B%2Foklk0hD6FisxX1YmDaQA37%2FNGZayj4sai4bmpXkvUZhoSYPB%2FEBAqrOLmr1zBCDuaZrUjXkkAVGO97yjJVj%2FWlfSYN6Od3pT9KM3YyqIxhB%2FZSYDNNCwQfPD%2FGdx5yY89gUKo1fpx27mduW2KUtOUgOj6a%2FeaZqfJ8bDatyA1RKxKetKrw6oLMlHsDq4y9ypyRcrgKiWk3CIE9hKANJH1Mu21Phvr%2FhdTNCy038lP4prI3a8H%2FVF%2F9QACbwRU70z9ngb6Q6oG7IzfzoHDbTnkvbrEAMqAOXQzjAucu2KJ90t0Vgx4Vz43Pbsgkcwhdu7LO5YAlzLSzvzfKtRDdMLa7qVSRvfG%2Fa%2F1%2FBVdmT309ZY11pdh5UaTHGS6KcqJbV0gZSmXXLlmKiqKoIGqnPJv7rZptdbTITfQpDuHfpGfshtWMmrHVFV3lwZCQ5%2B3BSWISSDtfkmCZfj%2F8GuDIWUd5GcJVo8a3HZKyb%2BZQjvhiksHm%2Bgye5YNdhtqzC24l6lYJv%2BOxNPCGagTawPUrK1MOGE2MkGOqUBrq9wxG2uW0%2B3yisYRGWyhldBIHatJi3C9FYezu1YG%2BnyMPRmWornBkAcuJirHqdjze6TAnnm6EjD5nqw3pQM3I0OeMPkU77jUJM%2FoOSq%2FITP8wrnqnQFKQvDm1ObYnL79wfYeswpYgH205dtp8VfgX%2BZO6DR2tjk%2BsIg1OVKLVY6k3D3iYDGufsN7PaB2X781cVQgSsYhQE4v4owtT53ITd1L3cj&X-Amz-Signature=36ff74501035f27368384f2306d59da1c54d1d606a5df4c2e9938eb141904ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q46QHFSY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcmdOxp2GZQmBVg86uZQ8K7viJDrkLPeKCKeYDRhUhDgIgdHFymfoq99LE3GvXd1tEaFTZNDJigjFTZI8ofsZXYnkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTwL8dESS0eUrKYjCrcA7tSb7LNG2JIldmxby02jKS%2Ft%2F6PbV4wbZKdfGEdjiuFjyoCSFe0fdWOdg9XwwY8xqhbn5%2Ff2i9hjMDWX2%2Bhlrdhaq0u%2FvQBGtjMPN%2B%2Foklk0hD6FisxX1YmDaQA37%2FNGZayj4sai4bmpXkvUZhoSYPB%2FEBAqrOLmr1zBCDuaZrUjXkkAVGO97yjJVj%2FWlfSYN6Od3pT9KM3YyqIxhB%2FZSYDNNCwQfPD%2FGdx5yY89gUKo1fpx27mduW2KUtOUgOj6a%2FeaZqfJ8bDatyA1RKxKetKrw6oLMlHsDq4y9ypyRcrgKiWk3CIE9hKANJH1Mu21Phvr%2FhdTNCy038lP4prI3a8H%2FVF%2F9QACbwRU70z9ngb6Q6oG7IzfzoHDbTnkvbrEAMqAOXQzjAucu2KJ90t0Vgx4Vz43Pbsgkcwhdu7LO5YAlzLSzvzfKtRDdMLa7qVSRvfG%2Fa%2F1%2FBVdmT309ZY11pdh5UaTHGS6KcqJbV0gZSmXXLlmKiqKoIGqnPJv7rZptdbTITfQpDuHfpGfshtWMmrHVFV3lwZCQ5%2B3BSWISSDtfkmCZfj%2F8GuDIWUd5GcJVo8a3HZKyb%2BZQjvhiksHm%2Bgye5YNdhtqzC24l6lYJv%2BOxNPCGagTawPUrK1MOGE2MkGOqUBrq9wxG2uW0%2B3yisYRGWyhldBIHatJi3C9FYezu1YG%2BnyMPRmWornBkAcuJirHqdjze6TAnnm6EjD5nqw3pQM3I0OeMPkU77jUJM%2FoOSq%2FITP8wrnqnQFKQvDm1ObYnL79wfYeswpYgH205dtp8VfgX%2BZO6DR2tjk%2BsIg1OVKLVY6k3D3iYDGufsN7PaB2X781cVQgSsYhQE4v4owtT53ITd1L3cj&X-Amz-Signature=ec6f62e9f87e5763d9c92e69fc28378347b75d9698b1052ddab66487ff3e1ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

