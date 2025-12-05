---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNK4PHV4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdxHn%2FW1FLrWrVHTzeEyni7RwkQ3j5uwBi9smXzhgvOAiEA%2FhKaOW9sfqVRkYg9JM2F6a8qHEe6ad%2BTn8iWtwOPItAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKo7BFTxUD1of8kHwircAwAt%2B%2FMh2F5pQIl%2B6GwAF4MFSUyZdhrnxtNFkTrDhpr9iS%2BGuudWn%2FZ%2FiFD3EnLsj%2F5q%2Fgj%2Fu1jamPsZ%2FUJX5u3Jkl7Lz%2FM%2BRdbMDnth5mnrBB9FKJiskjiyNTCvwOQSrhVHd2NLIawGere0lZI6ZH8eVu6Nq1oWZ1lTLpD9CJd7o4iZXpBimGJTa843lYjj3KXIlp4rmYOoNO3KFglVpRf4XdRYL1oHftwh9kdNhNA%2BEP9Cv4ng3FXWhtkU3jgY1q2TPvvtpVfL%2F5pjbpRhD6b6oihdtNKMA09GL0iNIIrk73%2BakyzdDz87P7%2Fp8sVwY7xK2XL0OcU2Y0oLrypw%2FDnXMFNrJGvZzxJXy3GqLm072vBDzOagoqCPzYgEJialD95zR7wNa2sYktxTsnY%2FuE7%2BMzVbphjhd%2FG2EsuHlNTwEp87IZKRLVIQlM6ZHCpfxhR0JzzqblBORXkgRqt35cRn58WMWCi9HTsP3TSFXP9zpjrYcM6xvb2mJioze2wbgxMg4wA0K8fSYefRPdgVOnReB%2B90C1UU9kslO9ORcGTABQifogHvItEbBfyq4tEwOj9hhDzlkjuISE2HSkjerZVrg%2BU%2FHmt3cCBMu%2Fn0P%2BflpEkwTbGysu%2F8vL%2B3MO2NzckGOqUBq6iiBqoxJRWkPjMC8Lf%2FAj86vb8Vsrvu1xkZLTOfpdMahFjCI82OqfMKq9K19UgvcaklmTHqlGUMN4ICgqKJTWw1t%2B521C%2FltjbdLdJJahBCpeSvr7rOdi4HJBEIOGuYj5rDJJbyS0bB%2Bw75pLO0K%2FZwUjMSSFeC1gNbUw5Kyidam%2BeIp1GFExvBOvg%2BHtTdpwsfqa4DoKbh8e23IAKgpPAbHwbW&X-Amz-Signature=4283de8fadd0e6936bf83e08f7fedcb2eb9c10977dc9ae7d6d8af10c539ca828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNK4PHV4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdxHn%2FW1FLrWrVHTzeEyni7RwkQ3j5uwBi9smXzhgvOAiEA%2FhKaOW9sfqVRkYg9JM2F6a8qHEe6ad%2BTn8iWtwOPItAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKo7BFTxUD1of8kHwircAwAt%2B%2FMh2F5pQIl%2B6GwAF4MFSUyZdhrnxtNFkTrDhpr9iS%2BGuudWn%2FZ%2FiFD3EnLsj%2F5q%2Fgj%2Fu1jamPsZ%2FUJX5u3Jkl7Lz%2FM%2BRdbMDnth5mnrBB9FKJiskjiyNTCvwOQSrhVHd2NLIawGere0lZI6ZH8eVu6Nq1oWZ1lTLpD9CJd7o4iZXpBimGJTa843lYjj3KXIlp4rmYOoNO3KFglVpRf4XdRYL1oHftwh9kdNhNA%2BEP9Cv4ng3FXWhtkU3jgY1q2TPvvtpVfL%2F5pjbpRhD6b6oihdtNKMA09GL0iNIIrk73%2BakyzdDz87P7%2Fp8sVwY7xK2XL0OcU2Y0oLrypw%2FDnXMFNrJGvZzxJXy3GqLm072vBDzOagoqCPzYgEJialD95zR7wNa2sYktxTsnY%2FuE7%2BMzVbphjhd%2FG2EsuHlNTwEp87IZKRLVIQlM6ZHCpfxhR0JzzqblBORXkgRqt35cRn58WMWCi9HTsP3TSFXP9zpjrYcM6xvb2mJioze2wbgxMg4wA0K8fSYefRPdgVOnReB%2B90C1UU9kslO9ORcGTABQifogHvItEbBfyq4tEwOj9hhDzlkjuISE2HSkjerZVrg%2BU%2FHmt3cCBMu%2Fn0P%2BflpEkwTbGysu%2F8vL%2B3MO2NzckGOqUBq6iiBqoxJRWkPjMC8Lf%2FAj86vb8Vsrvu1xkZLTOfpdMahFjCI82OqfMKq9K19UgvcaklmTHqlGUMN4ICgqKJTWw1t%2B521C%2FltjbdLdJJahBCpeSvr7rOdi4HJBEIOGuYj5rDJJbyS0bB%2Bw75pLO0K%2FZwUjMSSFeC1gNbUw5Kyidam%2BeIp1GFExvBOvg%2BHtTdpwsfqa4DoKbh8e23IAKgpPAbHwbW&X-Amz-Signature=888d2b6c7df5823a47759592f937635d581ad3534cc16002eb44706c64cef925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

