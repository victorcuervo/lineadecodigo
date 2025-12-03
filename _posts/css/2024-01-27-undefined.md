---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTRJHRT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHCKhM%2BeblOqPUkSfKNvPsgLt36t80TSk35Ap0eIAitAAiEAl%2BQvu9sBPbnwMRVODhCUd3iQHV4Vyh7QV8TAMIfxImIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDA34gh4f6km0sv3LcyrcA6qeAhgYF2qcWQHeid2tjRd01sYduVOzVDa2cWdzLAhR3pjoA2HR6CGvM8UlhxOaUtWPYbSRl3Lf5%2BKKEDnshcJRvVviL%2BJSv0PFrhAvLIqHcQ1I%2BC8puN3L4RaagSBe%2BpLxWZbojUIDHMLNB%2B0X9ID%2B9OTMSrZLqqJWpoVlMubg%2FJq0uHZx58pPrI7r%2BBrc%2B8TOxGz0NtYmzwvxd0Cn%2Ftxzz4An2KGbOcvTXRirNmp6YDLOAPucU0t23yiPnDMwF02ykRDiZd24h4jR6M9AxAq%2F9uu0bdoKcnr3G4gdK3I8%2FkDv9ME8rJUTT4vRZYmq%2BGaO5ZOpwgA7wbFucvNsvKJ5AWVXBmlLAnW25wpI17bqdEgge95sye6bFV%2F7FxeuSzFuzJIr8GZzcB76e9ZJsL4CLvl22KWC4GkDzQE49KS3gBw%2BL%2Ffyc8BDaEfVlvYIl1ExDN8lhSFySqv%2FJhqyU0ni3BMIXohTQAVjtDN0Zj3jTIke8r5QJVU23ZM9nH0Yiln3snBaX51Mr8bn%2BoYfmAtkp0fgsBwJ6b7ts3yngBR0VAq4f87PxGS%2B9ZATCHUUCs1XVIwrUehOwHWJr5nZkv%2B0fUb%2B8zaAmsxkeE4U7VdgrGeBTGPNu7qV32mDMIavwMkGOqUB9v2Ff4uEFpngRG5bbZoyE9xNy50UjnwUUTrVCqFfkYveQBPVBFtIeJhiYXUiCCgKi5YbuUhgsahhK%2BHFo%2F81xRxzTzDOYv5LRCRu7oKSuWeLDcpwIKzqRLSjTkVws1hCUKiE5tXF7n7hgdZgKqPG7W3xWc0elP7PAHMYGoNwUo07GqnS8eS24iJ5Fp3JsApx9z7wgMF8jXpUD2EAAMiSS5zilKFW&X-Amz-Signature=42c810790690a76dde301e73858e63ce6568c223a476ea94a6138264e7028426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTRJHRT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHCKhM%2BeblOqPUkSfKNvPsgLt36t80TSk35Ap0eIAitAAiEAl%2BQvu9sBPbnwMRVODhCUd3iQHV4Vyh7QV8TAMIfxImIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDA34gh4f6km0sv3LcyrcA6qeAhgYF2qcWQHeid2tjRd01sYduVOzVDa2cWdzLAhR3pjoA2HR6CGvM8UlhxOaUtWPYbSRl3Lf5%2BKKEDnshcJRvVviL%2BJSv0PFrhAvLIqHcQ1I%2BC8puN3L4RaagSBe%2BpLxWZbojUIDHMLNB%2B0X9ID%2B9OTMSrZLqqJWpoVlMubg%2FJq0uHZx58pPrI7r%2BBrc%2B8TOxGz0NtYmzwvxd0Cn%2Ftxzz4An2KGbOcvTXRirNmp6YDLOAPucU0t23yiPnDMwF02ykRDiZd24h4jR6M9AxAq%2F9uu0bdoKcnr3G4gdK3I8%2FkDv9ME8rJUTT4vRZYmq%2BGaO5ZOpwgA7wbFucvNsvKJ5AWVXBmlLAnW25wpI17bqdEgge95sye6bFV%2F7FxeuSzFuzJIr8GZzcB76e9ZJsL4CLvl22KWC4GkDzQE49KS3gBw%2BL%2Ffyc8BDaEfVlvYIl1ExDN8lhSFySqv%2FJhqyU0ni3BMIXohTQAVjtDN0Zj3jTIke8r5QJVU23ZM9nH0Yiln3snBaX51Mr8bn%2BoYfmAtkp0fgsBwJ6b7ts3yngBR0VAq4f87PxGS%2B9ZATCHUUCs1XVIwrUehOwHWJr5nZkv%2B0fUb%2B8zaAmsxkeE4U7VdgrGeBTGPNu7qV32mDMIavwMkGOqUB9v2Ff4uEFpngRG5bbZoyE9xNy50UjnwUUTrVCqFfkYveQBPVBFtIeJhiYXUiCCgKi5YbuUhgsahhK%2BHFo%2F81xRxzTzDOYv5LRCRu7oKSuWeLDcpwIKzqRLSjTkVws1hCUKiE5tXF7n7hgdZgKqPG7W3xWc0elP7PAHMYGoNwUo07GqnS8eS24iJ5Fp3JsApx9z7wgMF8jXpUD2EAAMiSS5zilKFW&X-Amz-Signature=1bf4dbdc0b42e0982593d57230fe8f82109240e33145cccbb2fc3dbe3b9db226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

