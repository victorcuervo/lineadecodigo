---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZPBQRF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtMN%2FW5agBreDQS5ELsaqIRjMxIDy63ptdKPKPf%2FncLQIhAPHKFas7GlLmqtmviTvCilm5m8Ab%2FrgIve4%2FKtrFiTUhKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ3du261%2F96uLn39oq3APy1qT7C3AiIyMrOxZjCyzI1I4q5kSYnGo3UzhYB2Sg0h2ECoi2CLODignwsZY8mOAMkGBPOwyI0fa8oqjTmMPdAa3QnMhJh8GDS5W7qJIG01YIz%2BGgzv3YLND%2BRntUTLKCfFUMhngFiM7SU%2ByGcU2nRHRUgFSwhwxnQhSPttACU6WMMfP9ODmwc7iSEPdimywNp6e25Wvaxo8jp74DJl9LnwTSjEbedpoVNOt%2BtxswWbay14RgrEVJ82dYJNNPP9LyOnSl0rRpRtpWkaLmxGUskexJBk6D2dhEOJjAcl%2FIKGZcpptJ3%2FbUtIKB%2BZO%2B2dKqs1bri5g44LdgEcrJ6Gv9ogQq%2Bb8%2F6RxGxZ3IG0zzT1dPBwaHLwPP7H6BEMGQzovEwaG6HsO%2Bw%2FQsn0TxZK90P0NOtF1UM%2BlmEKw%2BvvM%2BwJRo8%2B0MhwMkkuh%2BzSruUHI5TEE2Mj6tKS9eiXU83oL2sN0k4SFiENarQvtNpYS%2BZCOf4CdgHyAT6MWmYE6Q9gVfbbYKzByBkb%2F3%2FmdLyN9Y40lcWJKZ8yNqT4zD5x9ByzsckN7THuwNKY8SFoGbn7L2DstDivGjX7DcmhoOM1a4kvLU2fJLomRY3GM5m2aS5BT8GipcIOa8cYbbejD3hNjJBjqkAY3imI81H3vF7jeKJQpOMDOTM6hz0jhLM4Jcz7CjSf7Avi6am11yRxtsCH1%2F7tO%2BDEqF0f0dHiHWYn9hASTPUv%2Ffp1NeI2J3Q4KtRT1ZkJZq%2BdHyT6qTBfB4mHsV6gck0tm4K0By9bBeTdny09Af2PnH0R1vPULSq8RT5CSJ91tjG68e8u9m1oNBigC14tIXr8l3hjDuSfr41B2lqaFXBPQIhw%2F0&X-Amz-Signature=3ae9b9f94e1c5b5ec30ce823949a510a03d27ce06011534a309855fb953d7f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEZPBQRF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtMN%2FW5agBreDQS5ELsaqIRjMxIDy63ptdKPKPf%2FncLQIhAPHKFas7GlLmqtmviTvCilm5m8Ab%2FrgIve4%2FKtrFiTUhKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ3du261%2F96uLn39oq3APy1qT7C3AiIyMrOxZjCyzI1I4q5kSYnGo3UzhYB2Sg0h2ECoi2CLODignwsZY8mOAMkGBPOwyI0fa8oqjTmMPdAa3QnMhJh8GDS5W7qJIG01YIz%2BGgzv3YLND%2BRntUTLKCfFUMhngFiM7SU%2ByGcU2nRHRUgFSwhwxnQhSPttACU6WMMfP9ODmwc7iSEPdimywNp6e25Wvaxo8jp74DJl9LnwTSjEbedpoVNOt%2BtxswWbay14RgrEVJ82dYJNNPP9LyOnSl0rRpRtpWkaLmxGUskexJBk6D2dhEOJjAcl%2FIKGZcpptJ3%2FbUtIKB%2BZO%2B2dKqs1bri5g44LdgEcrJ6Gv9ogQq%2Bb8%2F6RxGxZ3IG0zzT1dPBwaHLwPP7H6BEMGQzovEwaG6HsO%2Bw%2FQsn0TxZK90P0NOtF1UM%2BlmEKw%2BvvM%2BwJRo8%2B0MhwMkkuh%2BzSruUHI5TEE2Mj6tKS9eiXU83oL2sN0k4SFiENarQvtNpYS%2BZCOf4CdgHyAT6MWmYE6Q9gVfbbYKzByBkb%2F3%2FmdLyN9Y40lcWJKZ8yNqT4zD5x9ByzsckN7THuwNKY8SFoGbn7L2DstDivGjX7DcmhoOM1a4kvLU2fJLomRY3GM5m2aS5BT8GipcIOa8cYbbejD3hNjJBjqkAY3imI81H3vF7jeKJQpOMDOTM6hz0jhLM4Jcz7CjSf7Avi6am11yRxtsCH1%2F7tO%2BDEqF0f0dHiHWYn9hASTPUv%2Ffp1NeI2J3Q4KtRT1ZkJZq%2BdHyT6qTBfB4mHsV6gck0tm4K0By9bBeTdny09Af2PnH0R1vPULSq8RT5CSJ91tjG68e8u9m1oNBigC14tIXr8l3hjDuSfr41B2lqaFXBPQIhw%2F0&X-Amz-Signature=fe1ddca329fe420a17f74f1ab9d5b848ccd40a509a903141cff8d2b97aa166d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

