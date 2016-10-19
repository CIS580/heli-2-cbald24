module.exports = exports = BulletPool;

function BulletPool(maxSize) {
    this.pool = new Float32Array(4 * maxSize);
    this.end = 0;
    this.max = maxSize;
}

BulletPool.prototype.add(position, velocity)
{
    if(this.end < this.max)
    {
        this.pool[4*this.end] = position.x;
    this.pool[4*this.end + 1] = position.y;
    this.pool[4*this.end+2] = velocity.x;
    this.pool[4*this.end+3] = velocity.y;
    this.end++;
    }
}

BulletPool.prototype.update = function(elapsedTime)
{
    for(var i =0; i< this.end; i++)
    {
        this.pool[4*i] += this.pool[4*i+2];
        this.pool[]
    }
}